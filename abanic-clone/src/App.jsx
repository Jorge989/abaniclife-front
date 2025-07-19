// import React from "react";
// import "./App.css";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import CultureSection from "./components/CultureSection";
// import NewsletterSection from "./components/NewsletterSection";
// import Footer from "./components/Footer";
// import { LanguageProvider } from "./context/LanguageContext";
// function App() {
//   return (
//     <LanguageProvider>
//       <div className="App">
//         <Header />
//         <main>
//           <HeroSection />
//           <CultureSection />
//           <NewsletterSection />
//         </main>
//         <Footer />
//       </div>
//     </LanguageProvider>
//   );
// }

// export default App;

import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

// Lazy loading das páginas
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
