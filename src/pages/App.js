import Playlist from '../components/Playlist';
import Header from '../components/Header';
import SeePlaylist from '../components/SeePlaylist';

// https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn

export default function App() {
  return (
    <div className="bg-pink-200">
      <Header title="Jammming" />
      <Playlist />

      <SeePlaylist />
    </div>
  );
}
