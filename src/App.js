import { Route, Routes } from "react-router-dom";
import DefaultThemeplate from "./theme/DefaultThemeplate/DefaultThemeplate";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultThemeplate />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
