import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { checkUserSession } from "./Store/User/User.action";
// Components
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
// Styles
import "./App.css";
// Lazy Components
const Home = lazy(() => import("./Routes/Home/Home"));
const Checkout = lazy(() => import("./Routes/Checkout/Checkout"));
const Navigation = lazy(() => import("./Routes/Navigation/Navigation"));
const Auth = lazy(() => import("./Routes/Authentication/Auth"));
const Shop = lazy(() => import("./Routes/Shop/Shop"));
const About = lazy(() => import("./Routes/About/About"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="auth" element={<Auth />} />
          <Route path="Checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
