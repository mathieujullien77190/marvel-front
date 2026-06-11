import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

import { ROUTES } from "./constants";
import { Comics } from "./pages/Comics";

const App = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.characters} element={<Home />} />
      <Route path={ROUTES.comics} element={<Comics />} />
    </Routes>
  </Router>
);

export default App;
