import { Route, Routes } from "react-router-dom";
import DefaultThemeplate from "./theme/DefaultThemeplate/DefaultThemeplate";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultThemeplate />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
