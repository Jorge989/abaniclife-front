import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CultureSection from "./components/CultureSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <CultureSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
