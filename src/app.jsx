import HomePage from './components/homepage';
import ArtistsPage from './components/artistspage';
import ViewArtistPage from './components/viewartist';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/search_results/:searchTerm" component={ArtistsPage} />
            <Route path="/view_artist/:artist_id" component={ViewArtistPage} />
            <Route component={Error} />
        </Switch>
    </main>
  );
}

export default App;
