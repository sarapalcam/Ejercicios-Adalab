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

