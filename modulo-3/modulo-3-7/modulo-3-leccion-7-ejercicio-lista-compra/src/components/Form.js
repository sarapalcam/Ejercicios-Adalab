import Preview from './Preview';
import InputGroupText from './InputGroupText';
import InputGroupSelect from './InputGroupSelect';
import InputGroupCheck from './InputGroupCheck';
import InputGroupRadio from './InputGroupRadio';
// import Button from './Button';

const Form = (props) => {
    
    const handleForm = (ev) => {
        ev.preventDefault();
        props.handleFormSubmit();
    }

    return (
        <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <InputGroupText
            labelText="Escribe un nombre:"
            inputName="name"
            inputId="name"
            inputPlaceholder="María García"
            inputValueName={props.inputName}
            handleChange={props.handleChangeName}
          />
          {/* email */}
          <InputGroupText
            labelText="Escribe un nombre:"
            inputName="email"
            inputId="email"
            inputPlaceholder="mariagarcia@gmail.com"
            inputValue={props.inputEmail}
            handleChange={props.handleChangeEmail}
          />
          {/* region */}
          <InputGroupSelect
            labelText="Indica tu región:"
            inputName="region"
            inputId="region"
            value={props.inputRegion}
            handleChange={props.handleChangeRegion}
          />
          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>
          <InputGroupRadio
            labelText="Tarjeta de crédito"
            inputId="creditCard"
            inputValue="creditCard"
            checked={props.inputPaymentType === 'creditCard'}
            handleChange={props.handleChangePaymentType}
          />
          <InputGroupRadio
            labelText="Efectivo"
            inputId="cash"
            inputValue="cash"
            checked={props.inputPaymentType === 'cash'}
            handleChange={props.handleChangePaymentType}
          />
          <InputGroupRadio
            labelText="Contra reembolso"
            inputId="cashOnDelivery"
            inputValue="cashOnDelivery"
            checked={props.inputPaymentType === 'cashOnDelivery'}
            handleChange={props.handleChangePaymentType}
          />
          {/* legal terms */}
          <InputGroupCheck
            labelText="Debes aceptar nuestros términos legales para completar la compra:"
            inputName="legalTerms"
            inputId="legalTerms"
            checked={props.inputLegalTerms}
            handleChange={props.handleChangeLegalTerms}
          />
        </div>
        <Preview
          name={props.inputName}
          email={props.inputEmail}
          region={props.inputRegion}
          legalTerms={props.inputLegalTerms}
          paymentType={props.inputPaymentType}
        ></Preview>
        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}

        {/* NO ME HAN SALIDO LOS BOTONES, MIRAR MÁS ADELANTE */}

        {/* <input
          className="button"
          type="submit"
          value="Enviar"
          disabled={isValidForm() === false}
        />
        <Button className="button" btnText="Enviar" handleClick={handleResetButton}/>
        {/* send */}
        {/* <Button className="button reset" btnText="Limpiar el formulario" handleClick={handleResetButton}/> */} 
      </form>
    )
}

export default Form;