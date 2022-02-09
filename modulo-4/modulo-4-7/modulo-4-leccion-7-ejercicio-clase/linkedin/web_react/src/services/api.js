const getApiData = (userId) => {
  return fetch(`//localhost:3000/contacts/`, {
    headers: {
      userId: userId,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((user) => {
        return {
          id: user.id,
          gender: user.gender,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      });
      return cleanData;
    });
};
//validar el login
const sendLogin = (data) => {
  return fetch(`//localhost:3000/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
//insertar un nuevo registro de usuario (TABLA USERS)
const singUp = (data) => {
  return fetch(`//localhost:3000/user/singUp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
//update un registro de una tabla existente en la tabla de contact
const updateContact = (data) => {
  return fetch(`//localhost:3000/contact/update`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

//delete
const exportObj = {
  getApiData: getApiData,
  sendLogin: sendLogin,
  singUp: singUp,
  updateContact: updateContact,
};
export default exportObj;
//export default getApiData;
