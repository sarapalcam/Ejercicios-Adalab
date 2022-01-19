import { useState } from 'react';
import Form from './Form';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular'); 
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (value) => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(value);
  };

  const handleResetButton = () => {
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = () => {
    console.log('Enviando datos al servidor...');
  };

  const isValidForm = () => {
    if (
      name !== '' &&
      email !== '' &&
      paymentType !== '' &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Form inputName={name} inputEmail={email} inputRegion={region} inputPaymentType={paymentType} inputLegalTerms={legalTerms} handleChangeName={handleName} handleChangeEmail={handleEmail} handleChangeRegion={handleRegion} handleChangePaymentType={handlePaymentType} handleChangeLegalTerms={handleLegalTerms} handleFormSubmit={handleForm}/>
    </div>
  );
};

export default App;
