import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));

const ScrollToAnchor = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Scroll to top on path change
    if (!hash) window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Scroll to anchor after a small delay if hash exists
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150); // Ajuste este delay conforme necessário
    }
  }, [hash, key]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router basename="/">
        <ScrollToAnchor />
        <div className="App">
          <Header />
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                Carregando...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product#:section" element={<Product />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
