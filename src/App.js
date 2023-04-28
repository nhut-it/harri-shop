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
import Terms from "./pages/Terms/Terms";
import Forgot from "./pages/Forgot/Forgot";
import Error404 from "./pages/Error404/Error404";
import Cart from "./pages/Cart/Cart";
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
        <Route path="terms" element={<Terms />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="error404" element={<Error404 />} /> */}
        <Route path="*" index element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
