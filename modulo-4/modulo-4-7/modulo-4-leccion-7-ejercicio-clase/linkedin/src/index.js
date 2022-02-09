const express = require('express');
const cors = require('cors');
const contactsData = require('./data/contacts.json');
const Database = require('better-sqlite3');

//Crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//Iniciar el servidor
const serverPort = 3000;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

//Configurar el servidor de estáticos:
//const staticServerPath = "./public"
//server.use(express.static(staticServerPath));

const db = Database('./src/likendl.db', { verbose: console.log });

//Api Endpoints

//GET /login ? email & pass
server.post('/login', (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;

  //1- SQL buscar en la BD el ususario
  //2-ejecutar la query
  const query = db.prepare('SELECT * FROM users WHERE  pass = ? and email= ?');
  const foundUser = query.get(pass, email);
  if (foundUser !== undefined) {
    res.json({ userId: foundUser.id });
  } else {
    res.json({ error: 'Error ' });
  }
});

server.get('/contacts', (req, res) => {
  //Así relacionamos las dos tablas de la base de datos: de 1 a N
  // const query = db.prepare(`SELECT * FROM contacts, location WHERE location.id = contacts.id_location `);
  //EJEMPLO DE QUERY CON VARIAS TABLAS RELACIONADAS. PODEMOS PONER VARIAS QUERIES DENTRO DEL MISMO ENDPOINT Y QUE SE EJECUTE UNA U OTRA EN FUNCIÓN DE, POR EJEMPLO, SI TENEMOS UN FILTRO.
  const idUser = req.headers.userid;
  const query = db.prepare("SELECT * FROM contacts, users, user_contacts, location WHERE users.id = user_contacts.idUser AND contacts.id = user_contacts.id AND location.id = contacts.id_location AND users.id = ?");
  const contactsData = query.all(idUser);
  console.log(contactsData);
  res.json(contactsData);
});


server.post("/contact/add", (req, res) => {
  const email = req.body.email;
  const gender = req.body.gender;
  const name = req.body.name;
  const image = req.body.image;
  const city = req.body.city;
  const country = req.body.country;

  const queryLocation = db.prepare("INSERT INTO location (city,country) VALUES (? ,?)");
  const insertLocation = queryLocation.run(city, country);

  const queryContact = db.prepare("INSERT INTO contacts (email, name, gender, image, id_location) VALUES (?,?,?,?,?)");
  const idLocation = insertLocation.lastInsertRowid;
  const insertContact = db.run(email, name, gender, image, idLocation);

  if(insertContact !== undefined){
    res.json({msj: "se agrego"})
  } else {
    res.json({msj: "error"})
  }
})

// endpoint para registrar un  nuevo usuario
// esta peticion al servidor se realiza desde  la carpeta services->api.js en el front
server.post('/user/singUp', (req, resp) => {
  //recibimos los datos enviados en el formulario  que se encuentra en el componente de React Register.js
  const email = req.body.email;
  const pass = req.body.password;

  //validamos si el usuario a insertar existe, porque no pueden haber dos usuarios coon el mismo email
  const selectuser = db.prepare('select * from users where email = ?');
  const foundUser = selectuser.get(email);
  if (foundUser === undefined) {
    const query = db.prepare('INSERT INTO users (email,pass) VALUES (?,?)');
    const userInsert = query.run(email, pass);
    resp.json({
      error: false,
      userId: userInsert.lastInsertRowid,
    });
  } else {
    //en caso de que exista el email enviamos un mensajes al front
    resp.json({
      error: true,
      message: 'el usuario ya existe',
    });
  }
});
// endpoint para modificar un  nuevo usuario
server.patch('/contact/update', (req, resp) => {
  //ejecutamos la sentencia SQL para hacer el UPDATE del registr en la BD
  const query = db.prepare(
    'UPDATE contacts SET email =?, name = ?, gender=? WHERE id = ?'
  );
  //recibimos los datos enviados en el formulario  que se encuentra en el componente de React ContactDetail.js, estos han sido enviado a traves del cuerpo de la peticion
  const userUpdate = query.run(
    req.body.email,
    req.body.name,
    req.body.gender,
    req.body.id
  );
  //verificamos que se a modificado el registro para  enviar el mensaje de exito
  if (userUpdate.changes !== 0) {
    resp.json({
      error: false,
      message: 'modificado con exito',
    });
  } else {
    resp.json({
      error: true,
      message: 'ha ocurrido un error',
    });
  }
});
// endpoint para eliminar un  nuevo usuario
server.delete('/user/delete', (req, resp) => {
  //Verificamos si el usuario a eliminar existe en la BD
  const selectuser = db.prepare('select * from users where email = ?');
  const foundUser = selectuser.get(req.body.email);

  //
  if (foundUser !== undefined) {
    const query = db.prepare('delete from users where id = ?');
    const deleteUser = query.run(req.body.id);
    //verificamos que se a modificado el registro para  enviar el mensaje de exito
    if (deleteUser.changes === 0) {
      resp.json({
        error: true,
        message: 'No se elimino',
      });
    } else {
      resp.json({
        error: false,
        message: 'Se elimino',
      });
    }
  }
});
