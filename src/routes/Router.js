import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { PokemonListPage } from "../Pages/PokemonListPage/PokemonListPage";
import { PokeDexPage } from "../Pages/PokeDexPage/PokeDexPage"
import { Header } from "../Components/Header/Header"
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { Footer } from "../Components/Footer/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<PokemonListPage />} />
        <Route path="/pokedex" element={<PokeDexPage />} />
        <Route
          path="/pokemon/:pokemonName"
          element={<PokemonDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};