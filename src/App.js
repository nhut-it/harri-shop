import {
  Navigate,
  Route,
  Routes,
  useHref,
  useLocation,
} from "react-router-dom";
import DefaultThemeplate from "./theme/DefaultThemeplate/DefaultThemeplate";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import { useEffect } from "react";
import { useLocale } from "antd/es/locale";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Faqs from "./pages/Faqs/Faqs";
import Privacy from "./pages/Privacy/Privacy";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DefaultThemeplate />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" index element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
