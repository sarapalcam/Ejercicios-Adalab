const Button = (props) => {

const handleClickBtn = () => {
    props.handleClick();
}

  return (
    <button className={props.className} onClick={handleClickBtn}>
      {props.btnText}
    </button>
  );
};

export default Button;
