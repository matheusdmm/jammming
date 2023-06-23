import Playlist from './Playlist';
import SearchBar from './SearchBar';
import Header from './Header';
import SeePlaylist from './SeePlaylist';

// https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn

function App() {
  return (
    <div className="bg-pink-200">
      <Header title="Jammming" />
      <Playlist />

      <SeePlaylist />
    </div>
  );
}

export default App;
