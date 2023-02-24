import './App.css';
import { Header } from './Components/Header/Header';
import { PokemonCard } from './Components/PokemonCard/PokemonCard';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <PokemonCard/>

    </div>
  );
}

export default App;
