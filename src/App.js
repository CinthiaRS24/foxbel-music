import logo from './logo.svg';
import './App.css';
import NavigationMenu from './componentes/NavigationMenu'
import SearchBar from './componentes/SearchBar';
import MusicDetail from './componentes/MusicDetail';
import Results from './componentes/Results';

function App() {
  return (
    <div className="App">
      <NavigationMenu/>
      <SearchBar/>
      <MusicDetail/>
      <Results />
    </div>
  );
}

export default App;
