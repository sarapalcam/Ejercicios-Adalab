import '../styles/Loader.scss';

const Loader = ({ isLoading }) => {
  return (
      isLoading ? 
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    : null
  );
};

export default Loader;
