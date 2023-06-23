import Playlist from './Playlist';
import SearchBar from './SearchBar';
import Header from './Header';

function App() {
  return (
    <div className="bg-pink-200">
      <Header title="Jammming" />

      <Playlist />
    </div>
  );
}

export default App;
