import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Comics } from "./pages/Comics";
import { FavoritesComics } from "./pages/FavoritesComics";
import { FavoritesCharacters } from "./pages/FavoritesCharacters";

import { ROUTES } from "./constants";

const App = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.characters} element={<Home />} />
      <Route path={ROUTES.comics} element={<Comics />} />
      <Route path={ROUTES.favoritesComics} element={<FavoritesComics />} />
      <Route
        path={ROUTES.favoritesCharacters}
        element={<FavoritesCharacters />}
      />
      <Route path={ROUTES.favorites} element={<FavoritesCharacters />} />
    </Routes>
  </Router>
);

export default App;
