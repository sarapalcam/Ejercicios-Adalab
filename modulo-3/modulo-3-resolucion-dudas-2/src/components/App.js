import "../styles/index.scss";
import "../styles//App.scss";
import Header from "./Header";
import callToApi from "../services/fecth";
import { useEffect, useState } from "react";
import RepoList from "./RepoList";

function App() {
  const [reposData, setReposData] = useState([]);

  useEffect(() => {
    callToApi().then((dataApi) => {
      const mappedRepos = dataApi.map((eachRepo) => {
        return {
          id: eachRepo.id,
          fullname: eachRepo.full_name,
          image: eachRepo.owner.avatar_url,
          description: eachRepo.description,
        };
      });
      setReposData(mappedRepos);
    });
  }, []);

  const deleteRepo = (id) => {
    const findRepoIndex = reposData.findIndex(eachRepo => eachRepo.id === parseInt(id));
    reposData.splice(findRepoIndex, 1);
    setReposData([...reposData])
  }

  return (
    <div className="App">
      <Header
        number="3."
        lesson="Resolución de dudas"
        title="React"
        subtitle="Listado de repos de Adalab"
      />
      <main>
        <RepoList reposData={reposData} deleteRepo={deleteRepo}/>
      </main>
    </div>
  );
}

export default App;
