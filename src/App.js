import logo from './logo.svg';
import './App.css';
import NavigationMenu from './componentes/NavigationMenu'
import SearchBar from './componentes/SearchBar';
import MusicDetail from './componentes/MusicDetail';
import Results from './componentes/Results';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <NavigationMenu/>
      <SearchBar/>
      <MusicDetail/>
      <Results/>
      <Footer/>
    </div>
  );
}

export default App;
