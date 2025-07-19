import { createContext, useState, useContext } from "react";

// Cria o contexto
const LanguageContext = createContext();

// Provider que envolve sua aplicação
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt"); // idioma inicial

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar o contexto de idioma
export const useLanguage = () => useContext(LanguageContext);
