import React, { useState, useEffect } from "react";
import { Search, User, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import LogoAbanic from "../assets/LogoAbanic.png";

const translations = {
  pt: {
    topBar: "Enviamos para todo o Brasil",
    menu: [
      { name: "Home", href: "/" },
      {
        name: "Sobre",
        href: "#sobre",
        submenu: [
          { name: "Marca", href: "#marca" },
          { name: "Fundadoras", href: "#fundadoras" },
        ],
      },
      {
        name: "Produto",
        href: "/product",
        submenu: [
          { name: "Hidratante com FPS 50", href: "/product#hidratante" },
          { name: "Ativos e Benefícios", href: "/product#ativos" },
        ],
      },
      {
        name: "Explore",
        href: "#explore",
        submenu: [
          { name: "Guia-Explore", href: "#guia" },
          { name: "Novidades", href: "#novidades" },
          { name: "Dicas", href: "#dicas" },
        ],
      },
      {
        name: "Suporte",
        href: "#suporte",
        submenu: [
          { name: "FAQ", href: "#faq" },
          { name: "Contato", href: "#contato" },
          { name: "Tutorial", href: "#tutorial" },
        ],
      },
    ],
  },
  en: {
    topBar: "We ship all over Brazil",
    menu: [
      { name: "Home", href: "#home" },
      {
        name: "About",
        href: "#sobre",
        submenu: [
          { name: "Brand", href: "#marca" },
          { name: "Founders", href: "#fundadoras" },
        ],
      },
      {
        name: "Product",
        href: "#produto",
        submenu: [
          { name: "Moisturizer SPF 50", href: "#hidratante" },
          { name: "Actives and Benefits", href: "#ativos" },
        ],
      },
      {
        name: "Explore",
        href: "#explore",
        submenu: [
          { name: "Explore Guide", href: "#guia" },
          { name: "News", href: "#novidades" },
          { name: "Tips", href: "#dicas" },
        ],
      },
      {
        name: "Support",
        href: "#suporte",
        submenu: [
          { name: "FAQ", href: "#faq" },
          { name: "Contact", href: "#contato" },
          { name: "Tutorial", href: "#tutorial" },
        ],
      },
    ],
  },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [language, setLanguage] = useState("pt");

  // Para abrir/fechar menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Para controlar submenus mobile abertos
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = translations[language].menu;

  const toggleMobileSubmenu = (index) => {
    if (mobileActiveSubmenu === index) {
      setMobileActiveSubmenu(null);
    } else {
      setMobileActiveSubmenu(index);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-smooth ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-abanic-gray-light"
      }`}
    >
      {/* Top bar */}
      <div className="bg-abanic-gray-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2">
            <span className="text-sm text-abanic-gray">
              {translations[language].topBar}
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between py-4">
          {/* Desktop Language Selector */}
          <div className="hidden lg:block absolute left-0">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="
        bg-transparent
        border border-gray-300
        rounded-md
        py-1 px-3
        text-sm
        text-abanic-gray
        cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
        transition-colors
        appearance-none
        pr-6
        min-w-[120px]
      "
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' stroke='%236B7280' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M6 9l6 6 6-6'></path></svg>")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1em",
              }}
              aria-label="Selecionar idioma"
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Logo centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="block">
              <img
                src={LogoAbanic}
                alt="Logo Abanic"
                className="h-14 w-auto max-w-full object-contain"
              />
            </a>
          </div>

          {/* Desktop Search and User Icons aligned to right */}
          <div className="hidden lg:flex items-center space-x-4 ml-auto pr-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-abanic-gray" />
              <Input
                type="text"
                placeholder={language === "pt" ? "Buscar" : "Search"}
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-abanic-gray hover:text-abanic-gray-dark"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-abanic-gray hover:text-abanic-gray-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center items-center space-x-16 pb-4">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.submenu && setActiveSubmenu(index)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              {item.submenu ? (
                // Menu com submenu — não clicável, só abre o dropdown
                <button
                  type="button"
                  className="text-abanic-gray hover:text-abanic-gray-dark transition-smooth flex items-center cursor-pointer"
                  onClick={(e) => e.preventDefault()} // evita navegação acidental
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                // Menu sem submenu — link normal
                <a
                  href={item.href}
                  className="text-abanic-gray hover:text-abanic-gray-dark transition-smooth flex items-center"
                >
                  {item.name}
                </a>
              )}

              {item.submenu && activeSubmenu === index && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-abanic-gray hover:bg-gray-50 hover:text-abanic-gray-dark transition-smooth"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-200 shadow-md py-6">
            <ul className="flex flex-col space-y-4 px-4">
              {/* Search input */}
              <li>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="text"
                    placeholder={language === "pt" ? "Buscar" : "Search"}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </li>

              {/* Login / Perfil e Sacola */}
              <li className="flex space-x-4 justify-center">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                  onClick={() => {
                    // aqui você pode redirecionar ou abrir modal login/perfil
                    alert("Login/Perfil");
                    setMobileMenuOpen(false);
                  }}
                >
                  <User className="h-5 w-5" />
                  <span>{language === "pt" ? "Entrar" : "Login"}</span>
                </Button>

                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                  onClick={() => {
                    // aqui você pode redirecionar para sacola/carrinho
                    alert("Sacola de compras");
                    setMobileMenuOpen(false);
                  }}
                >
                  {/* Se você tiver um ícone de sacola/carrinho, importe e use aqui */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6H19"
                    />
                  </svg>
                  <span>{language === "pt" ? "Sacola" : "Cart"}</span>
                </Button>
              </li>

              {/* Idioma dentro do menu mobile */}
              <li className="mb-4">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="
            w-full
            bg-gray-100
            border border-gray-300
            rounded-md
            py-2 px-3
            text-sm
            text-gray-700
            cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
            transition-colors
            appearance-none
            pr-8
          "
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' stroke='%236B7280' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M6 9l6 6 6-6'></path></svg>")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1em",
                  }}
                  aria-label="Selecionar idioma"
                >
                  <option value="pt">Português</option>
                  <option value="en">English</option>
                </select>
              </li>

              {/* Menu itens */}
              {menuItems.map((item, index) => (
                <li key={item.name} className="border-b border-gray-200 pb-2">
                  {!item.submenu ? (
                    <a
                      href={item.href}
                      className="block py-2 text-lg text-gray-800 hover:text-abanic-orange transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="w-full flex justify-between items-center py-2 text-lg text-gray-800 hover:text-abanic-orange transition-colors focus:outline-none"
                        onClick={() => toggleMobileSubmenu(index)}
                        aria-expanded={mobileActiveSubmenu === index}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`ml-2 h-5 w-5 transform transition-transform ${
                            mobileActiveSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileActiveSubmenu === index && (
                        <ul className="mt-2 pl-4 border-l border-gray-300 space-y-1">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <a
                                href={subItem.href}
                                className="block py-1 text-gray-700 hover:text-abanic-orange transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
