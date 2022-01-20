import '../styles/index.scss';
import '../styles//App.scss';
import OverviewPage from './OverviewPage';
import RepositoriesPage from './RepositoriesPage';
import PackagesPage from './PackagesPage';
import PeoplePage from './PeoplePage';
import TeamsPage from './TeamsPage';
import ProjectsPage from './ProjectsPage';
import SettingsPage from './SettingsPage';
import NotFoundPage from './NotFoundPage';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/overview">
          <OverviewPage />
        </Route>

        <Route path="/repositories">
          <RepositoriesPage />
        </Route>

        <Route path="/packages">
          <PackagesPage />
        </Route>

        <Route path="/people">
          <PeoplePage />
        </Route>

        <Route path="/teams">
          <TeamsPage />
        </Route>

        <Route path="/projects">
          <ProjectsPage />
        </Route>

        <Route path="/settings">
          <SettingsPage />
        </Route>

        <Route path="/settings">
          <NotFoundPage />
        </Route>
      </Switch>

     <Header />
    </div>
  );
}

export default App;
