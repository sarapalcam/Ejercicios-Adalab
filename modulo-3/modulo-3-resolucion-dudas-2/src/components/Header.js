const Header = (props) => {
  return (
    <header>
      {props.subtitle ? (
        <>
          <h1>
            {props.number} {props.lesson}: {props.title}
          </h1>
          <h2>{props.subtitle}</h2>
        </>
      ) : (
        <h1>
          {props.number} {props.lesson}: {props.title}
        </h1>
      )}
    </header>
  );
};

export default Header;
