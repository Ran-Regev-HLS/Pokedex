import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AllPokemonsPage from "./pages/AllPokemonsPage/AllPokemonsPage";
import MyPokemonsPage from "./pages/MyPokemonsPage/MyPokemonsPage";
import FightingArenaPage from "./pages/FightingArenaPage/FightingArenaPage";
import LayoutComponent from "./Layout";


const AppRouter = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route element={<LayoutComponent />}>
        <Route path="/" element={<Navigate to="/all-pokemons" replace />} />
        <Route path="/all-pokemons" element={<AllPokemonsPage />} />
        <Route path="/my-pokemons" element={<MyPokemonsPage />} />
        <Route path="/fighting-arena" element={<FightingArenaPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default AppRouter;
