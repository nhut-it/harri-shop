import { Route, Routes } from "react-router-dom";
import DefaultThemeplate from "./theme/DefaultThemeplate/DefaultThemeplate";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultThemeplate />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
