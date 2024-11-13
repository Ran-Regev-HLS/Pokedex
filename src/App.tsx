import Header from "./assets/components/shared/Header/Header";
import GlobalStyle from "./assets/GlobalStyles";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FightingArenaPage from "./assets/pages/FightingArenaPage/FightingArenaPage";
import MyPokemonsPage from "./assets/pages/MyPokemonsPage/MyPokemonsPage";
import AllPokemonsPage from "./assets/pages/AllPokemonsPage/AllPokemonsPage";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true  }}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/all-pokemons" replace />} />
          <Route path="/all-pokemons" element={<AllPokemonsPage />} />
          <Route path="/my-pokemons" element={<MyPokemonsPage />} />
          <Route path="/fighting-arena" element={<FightingArenaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
