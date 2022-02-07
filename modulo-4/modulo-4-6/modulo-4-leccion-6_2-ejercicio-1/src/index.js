const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const app = express();
app.use(cors());
app.use(express.json());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const db = new Database("./src/posts.db", {
  verbose: console.log,
});

app.get('/books-asc-price', (req, res) => {
    const query = db.prepare('SELECT * FROM books ORDER BY price ASC');
    const ascBooksPrice = query.all();
    res.json(ascBooksPrice);
});

app.get('/books-higher-5-price', (req, res) => {
    const query = db.prepare('SELECT * FROM books WHERE price > ?');
    const higherBooksPrice = query.all(5);
    res.json(higherBooksPrice);
});

app.get('/books-in-stock', (req, res) => {
    const query = db.prepare('SELECT * FROM books WHERE stock = 1');
    const inStockBooks = query.all();
    res.json(inStockBooks);
});

app.get('/books-in-stock-to-send', (req, res) => {
    const query = db.prepare('SELECT * FROM books WHERE stock = 1 AND toSend = 1');
    const inStockToSendBooks = query.all();
    res.json(inStockToSendBooks);
});

app.get('/books-id-1', (req, res) => {
    const query = db.prepare('SELECT * FROM books WHERE bookId = 1');
    const bookId = query.get();
    res.json(bookId);
});

app.get('/books-title-asc-first', (req, res) => {
    const query = db.prepare('SELECT * FROM books LIMIT ?');
    const limitedBooks = query.all(3)
    const sortedQuery = limitedBooks.sort((a, b) => a.title > b.title ? 1 : -1);
    res.json(sortedQuery);
});

app.get('/books-title-asc-last', (req, res) => {
    const query = db.prepare('SELECT * FROM books LIMIT ? OFFSET ?');
    const limitedBooks = query.all(3, 3)
    const sortedQuery = limitedBooks.sort((a, b) => a.title > b.title ? 1 : -1);
    res.json(sortedQuery);
});

app.patch('/books/:bookId', (req, res) => {
    const query = db.prepare("UPDATE books SET title = ? WHERE bookId = ?");
    const result = query.run(req.body.title, req.params.bookId);
    res.json(result);
});

app.patch('/books-stock', (req, res) => {
    const query = db.prepare("UPDATE books SET stock = ? WHERE toSend = 1");
    const result = query.run(req.body.stock);
    res.json(result);
});

app.put('/book-change/:bookId', (req, res) => {
    const query = db.prepare("UPDATE books SET title = ?, author = ?, abstract = ?, price = ?, stock = ?, toSend = ? WHERE bookId = ?");
    const result = query.run(req.body.title, req.body.author, req.body.abstract, req.body.price, req.body.stock, req.body.toSend, req.params.bookId);
    res.json(result);
});

app.post('/books-add', (req, res) => {
    const query = db.prepare("INSERT INTO books (title, author, abstract, price, stock, toSend) VALUES (?, ?, ?, ?, ?, ?)");
    if(req.body.title !== "" && req.body.author !== "" ){
        const result = query.run(req.body.title, req.body.author, req.body.abstract, req.body.price, req.body.stock, req.body.toSend);
        res.json(result);
    } else {
        res.json({error: 'Invalid input data'});
    }
});

app.delete('/books-delete/:bookId', (req, res) => {
   const query = db.prepare("DELETE FROM books WHERE bookId = ?");
   const result = query.run(req.params.bookId);
   res.json(result);
});

app.delete('/physic-books-no-stock-delete', (req, res) => {
    const query = db.prepare("DELETE FROM books WHERE stock = 0 AND toSend = 1");
    const result = query.run();
    res.json(result);
 });
 
