import '../styles/index.scss';
import '../styles//App.scss';
import contactData from '../data/data.json';
import localStorage from '../services/localStorage';
import { useState, useEffect } from 'react'; 

function App() {

  const [contacts, setContacts] = useState(localStorage.get("contact_data", [] || contactData));
  const [inputValue, setInputValue] = useState('');
  const [newContact, setNewContact] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: ''
  })

  useEffect(() => {
    localStorage.set("contact_data", [...contacts])
  })

  const handleChangeInput = (ev) =>{
    setInputValue(ev.currentTarget.value)
  }

  const handleChangeNewContact = (ev) => {
    const prop = ev.currentTarget.id;
    setNewContact({
      ...newContact, 
      [prop]: ev.currentTarget.value
    })
  }

  const resetForm = () =>{
    setNewContact({
      name: '',
      lastname: '',
      phone: '',
      email: ''
    })
  }

  const handleClickAddBtn = () => {
    const newContactArray = [...contacts];
    if (newContact.name !== '' &&
        newContact.lastname !== '' &&
        newContact.phone !== '' &&
        newContact.email !== ''){
          setContacts([
            ...newContactArray,
            newContact
          ]);
          resetForm();
        }
  }

  const handleSubmit = ev => {
    ev.preventDefault();
  }

  const renderContactList = () => {
    return contacts.filter(eachContact => eachContact.name.toLowerCase().includes(inputValue.toLowerCase()) ||
    eachContact.lastname.toLowerCase().includes(inputValue.toLowerCase()) ||
    eachContact.email.toLowerCase().includes(inputValue.toLowerCase()))
    .map((eachContact, index) => {
      return <li key={index} className="contact__item">
      <p className="contact__name">
        <label className="contact__label">Nombre:</label>{`${eachContact.name} ${eachContact.lastname}`}
      </p>
      <p className="contact__phone">
        <label className="contact__label">Teléfono:</label>
        <a href={`tel:${eachContact.phone}`} title={`Pulsa aquí para llamar a ${eachContact.name}`}>
        {eachContact.phone}
        </a>
      </p>
      <p className="contact__mail">
        <label className="contact__label">Email:</label>
        <a href={`mailto:${eachContact.email}`} title={`Pulsa aquí para escribir a ${eachContact.name}`}>
        {eachContact.email}
        </a>
      </p>
    </li>
    } )
  }

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            value={inputValue}
            onChange={handleChangeInput}
          />
        </form>
      </header>
      <main>
        {/* contact list */}
        <ul className="contact__list">
          {renderContactList()}
        </ul>

        {/* new contact */}
        <form className="new-contact__form" onSubmit={handleSubmit}>
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={newContact.name}
            onChange={handleChangeNewContact}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            value={newContact.lastname}
            onChange={handleChangeNewContact}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            value={newContact.phone}
            onChange={handleChangeNewContact}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleChangeNewContact}
          />
          <input className="new-contact__btn" type="submit" value="Añadir" onClick={handleClickAddBtn}/>
        </form>
      </main>
    </div>
  );
}

export default App;