import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

import { ROUTES } from "./constants";

const App = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
    </Routes>
  </Router>
);

export default App;
