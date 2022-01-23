import PropTypes from 'prop-types';
import propTypes from 'prop-types';


const Preview = ({ paymentType, name, email, region, legalTerms }) => {

  const renderPaymentTypeText = () => {
    if (paymentType === 'creditCard') {
      return 'Tarjeta de crédito';
    } else if (paymentType === 'cash') {
      return 'Efectivo';
    } else if (paymentType === 'cashOnDelivery') {
      return 'Contra reembolso';
    }
  };

  return (
    <div className="preview">
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {name}</li>
        <li>Email: {email}</li>
        <li>Región: {region}</li>
        <li>Método de pago: {renderPaymentTypeText()}</li>
        <li>
          Has aceptado nuestros términos legales:{' '}
          {legalTerms === true ? 'Sí' : 'No'}
        </li>
      </ul>
    </div>
  );
};

Preview.defaultProps = {
  name: '',
  email: '', 
  region: 'España Peninsular',
  legalTerms: false
}

Preview.propTypes = {
  paymentType: PropTypes.string.isRequired,
  name: propTypes.string.isRequired,
  email: propTypes.string, 
  region: propTypes.string,
  legalTerms: propTypes.bool.isRequired
}

export default Preview;
