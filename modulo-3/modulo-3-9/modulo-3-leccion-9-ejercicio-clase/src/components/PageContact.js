function PageContact(props) {
  return (
    <>
      <h2 className="title--medium mb-1">Quienes somos</h2>
      <p className="mt-1 mb-1">¡Ponte en contacto con nosotras! ¡Cuéntanos cositas!</p>
      <form action="" className="form">
        <div className="col2 mb-1">
          <label htmlFor="contactName">Nombre y apellidos:</label>
          <input placeholder="P. ej: MariCarmen Patata" name="contactName" id="contactName" />
        </div>
        <div className="col2 mb-1">
          <label htmlFor="contactEmail">Email de contacto:</label>
          <input placeholder="P.ej: mcarmen@pata.ta" name="contactEmail" id="contactEmail" />
        </div>
        <div className="col2 mb-1">
          <label htmlFor="contactReason">Razón:</label>
          <textarea placeholder="P.ej: He visto películas..." name="contactReason" id="contactReason"></textarea>
        </div>
        <button>Enviar</button>
      </form>
    </>
  );
}

export default PageContact;
