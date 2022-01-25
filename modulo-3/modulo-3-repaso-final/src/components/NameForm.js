const NameForm = ({ peopleName, labelText, handleFilter }) => {
  const handleChangeInput = (ev) => {
    handleFilter({
      key: 'name',
      value: ev.currentTarget.value
    });
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
