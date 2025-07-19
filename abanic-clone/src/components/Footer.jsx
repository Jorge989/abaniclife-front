import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // ajuste o caminho conforme sua estrutura

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Textos traduzidos por idioma
  const translations = {
    pt: {
      companyTitle: "Empresa",
      productsTitle: "Produtos",
      supportTitle: "Suporte",
      exploreTitle: "Explore",
      newsletterTitle: "Fique por dentro das novidades",
      newsletterDesc:
        "Receba dicas exclusivas, lançamentos e ofertas especiais diretamente no seu e-mail.",
      subscribeBtn: "Inscrever-se",
      copyright: `© ${currentYear} ABANIC. Todos os direitos reservados.`,
      legalLinks: [
        { name: "Termos de Uso", href: "#termos" },
        { name: "Privacidade", href: "#privacidade" },
        { name: "Cookies", href: "#cookies" },
      ],
      footerLinks: {
        company: [
          { name: "Sobre Nós", href: "#sobre" },
          { name: "Nossa História", href: "#historia" },
          { name: "Fundadoras", href: "#fundadoras" },
          { name: "Carreiras", href: "#carreiras" },
        ],
        products: [
          { name: "Hidratante FPS 50", href: "#hidratante" },
          { name: "Ativos Naturais", href: "#ativos" },
          { name: "Linha Completa", href: "#produtos" },
          { name: "Novidades", href: "#novidades" },
        ],
        support: [
          { name: "FAQ", href: "#faq" },
          { name: "Contato", href: "#contato" },
          { name: "Tutorial", href: "#tutorial" },
          { name: "Política de Privacidade", href: "#privacidade" },
        ],
        explore: [
          { name: "Guia Explore", href: "#guia" },
          { name: "Dicas de Beleza", href: "#dicas" },
          { name: "Blog", href: "#blog" },
          { name: "Comunidade", href: "#comunidade" },
        ],
      },
    },
    en: {
      companyTitle: "Company",
      productsTitle: "Products",
      supportTitle: "Support",
      exploreTitle: "Explore",
      newsletterTitle: "Stay Updated",
      newsletterDesc:
        "Receive exclusive tips, launches, and special offers directly in your email.",
      subscribeBtn: "Subscribe",
      copyright: `© ${currentYear} ABANIC. All rights reserved.`,
      legalLinks: [
        { name: "Terms of Use", href: "#terms" },
        { name: "Privacy", href: "#privacy" },
        { name: "Cookies", href: "#cookies" },
      ],
      footerLinks: {
        company: [
          { name: "About Us", href: "#about" },
          { name: "Our History", href: "#history" },
          { name: "Founders", href: "#founders" },
          { name: "Careers", href: "#careers" },
        ],
        products: [
          { name: "SPF 50 Moisturizer", href: "#moisturizer" },
          { name: "Natural Actives", href: "#actives" },
          { name: "Complete Line", href: "#products" },
          { name: "News", href: "#news" },
        ],
        support: [
          { name: "FAQ", href: "#faq" },
          { name: "Contact", href: "#contact" },
          { name: "Tutorial", href: "#tutorial" },
          { name: "Privacy Policy", href: "#privacy" },
        ],
        explore: [
          { name: "Explore Guide", href: "#guide" },
          { name: "Beauty Tips", href: "#tips" },
          { name: "Blog", href: "#blog" },
          { name: "Community", href: "#community" },
        ],
      },
    },
  };

  const t = translations[language]; // pega as traduções do idioma atual

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-abanic-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold abanic-orange mb-4">ABANIC</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === "pt"
                  ? "Conectando você com a essência da natureza através de produtos de beleza naturais e sustentáveis. Descubra a força da natureza em cada produto ABANIC."
                  : "Connecting you with the essence of nature through natural and sustainable beauty products. Discover the strength of nature in every ABANIC product."}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-600">contato@abanic.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-600">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-600">
                  {language === "pt"
                    ? "São Paulo, Brasil"
                    : "São Paulo, Brazil"}
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.companyTitle}</h4>
            <ul className="space-y-3">
              {t.footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.productsTitle}</h4>
            <ul className="space-y-3">
              {t.footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.supportTitle}</h4>
            <ul className="space-y-3">
              {t.footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.exploreTitle}</h4>
            <ul className="space-y-3">
              {t.footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">{t.newsletterTitle}</h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t.newsletterDesc}
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder={language === "pt" ? "Seu e-mail" : "Your email"}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-abanic-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-smooth hover-lift">
                {t.subscribeBtn}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-700 text-sm">{t.copyright}</div>

            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-700 ${social.color} transition-colors`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              {t.legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-abanic-orange hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-smooth hover-lift z-40"
        aria-label={language === "pt" ? "Voltar ao topo" : "Back to top"}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18 22"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
