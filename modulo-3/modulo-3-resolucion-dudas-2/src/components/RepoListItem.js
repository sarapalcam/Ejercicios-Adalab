const RepoListItem = (props) => {

  const handleDeleteRepo = (ev) => {
      props.deleteRepo(ev.currentTarget.id);
  }

  return props.reposData.map((eachRepo) => {
    return (
      <li key={eachRepo.id}>
        <article className="list">
            <img className="list__img" src={eachRepo.image} alt={`Imagen de ${eachRepo.fullname}`} />
            <div className="list__container">
                <div className="list__container--icon">
                    <h2>{eachRepo.fullname}</h2>
                    <i className="fas fa-trash-alt list__icon" id={eachRepo.id} onClick={handleDeleteRepo}></i>
                </div>
                <p>{eachRepo.description}</p>
            </div>
        </article>
      </li>
    );
  });
};

export default RepoListItem;
