const NameForm = ({ peopleName, changePeopleName, labelText }) => {
  const handleChangeInput = (ev) => {
    changePeopleName(ev.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="nameInput">{labelText}</label>
      <input
        type="text"
        id="nameInput"
        name="nameInput"
        value={peopleName}
        onChange={handleChangeInput}
      />
    </>
  );
};

export default NameForm;
