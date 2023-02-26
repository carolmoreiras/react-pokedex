import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PokemonListPage} from "../Pages/PokemonListPage/PokemonListPage";

export const Router = ({
  pokemonList
}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PokemonListPage pokemonList={pokemonList}/>} />
      </Routes>
    </BrowserRouter>
  );
};