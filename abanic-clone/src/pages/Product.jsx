import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";

const principiosData = [
  {
    name: "RHODYSSEY",
    subtitle: "Hidratação",
    description:
      "Obtido da Evodia rutaercapa, também conhecida como “Wu Zhu Yu”, cultivada no sudoeste da China. Anti-envelhecimento global, agindo na microcirculação da pele e é dedicado à tez. Este ativo ajuda a manter um tom de pele uniforme, bem como melhora a delicadeza da textura, a luminosidade e brilho da pele.",
    backgroundImage:
      "https://abaniclife.com/wp-content/uploads/2025/06/1-Rhodyssey.png",
  },
  {
    name: "Esqualano Vegetal",
    subtitle: "Rugas Finas",
    description:
      "Obtido através da XXX. Promove hidratação profunda, proteção da barreira cutânea, propriedades anti-inflamatórias e antioxidantes, melhora da elasticidade e firmeza da pele, prevenção do surgimento de linhas finas e rápida absorção na pele sem obstruir os poros.",
    backgroundImage:
      "https://abaniclife.com/wp-content/uploads/2025/06/4-Esqualano.png",
  },
  {
    name: "Calêndula",
    subtitle: "Acalmante",
    description:
      "Original da África e veio ao Brasil em meados do Séc. XVIII. Possui propriedades acalmantes, cicatrizantes, analgésicas, antissépticas, fungicidas e antimicrobianas. Indicado para peles sensíveis.",
    backgroundImage:
      "https://abaniclife.com/wp-content/uploads/2025/06/6-Calendula.png",
  },
  {
    name: "Belides",
    subtitle: "Equilíbrio de Pigmentação",
    description:
      "Obtido através das margaridas, é um ativo despigmentante. Neutraliza as manchas e equilibra a pigmentação.",
    backgroundImage:
      "https://abaniclife.com/wp-content/uploads/2025/06/3-Belides.png",
  },
  {
    name: "Jojoba",
    subtitle: "Equilíbrio da Oleosidade",
    description:
      "O óleo de jojoba é extraído da planta Simmondsia chinensis, tipo de arbusto nativo da América do Norte. Composto por vitaminas A, B1, B2 e E, ácido mirístico e 96% por ceramida. Proporciona-se capacidade de retenção hídrica da pele, hidratação, efeito antioxidante, ação anti-inflamatória e equilibra a oleosidade da pele.",
    backgroundImage:
      "https://abaniclife.com/wp-content/uploads/2025/06/5-Jojoba.png",
  },
  {
    name: "Gatuline Radiesse",
    subtitle: "Equilíbrio da Oleosidade",
    description:
      "O óleo de jojoba é extraído da planta Simmondsia chinensis, tipo de arbusto nativo da América do Norte. Composto por vitaminas A, B1, B2 e E, ácido mirístico e 96% por ceramida. Proporciona-se capacidade de retenção hídrica da pele, hidratação, efeito antioxidante, ação anti-inflamatória e equilibra a oleosidade da pele.",
    backgroundImage:
      "https://abaniclife.com/wp-content/uploads/2025/06/2-Gatuline-Radiesse.png",
  },
];

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-white/20 backdrop-blur-sm"
      onClick={onClose}
      style={{ pointerEvents: "auto" }}
    >
      <div
        className="bg-white rounded-lg p-8 max-w-[700px] w-full h-[560px]  overflow-auto shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 font-bold text-2xl"
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-semi-bold mb-4 text-gray-800">
          {item.name}
        </h2>
        <img
          src={item.backgroundImage}
          alt={item.name}
          className="w-full h-80 object-contain mb-4 text"
        />
        <p className="text-gray-700 text-2xl">{item.description}</p>
      </div>
    </div>
  );
};

const PrincipiosAtivos = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:-mt-16 mb-10">
      <h1 className="text-center text-4xl font-light text-[#494949] mb-10">
        Princípios Ativos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-4">
        {principiosData.map((item) => (
          <div
            key={item.name}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedItem(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelectedItem(item);
            }}
            className="relative rounded-xl cursor-pointer text-white font-semibold text-shadow-md flex items-center justify-center p-6 box-border bg-center bg-cover h-40"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-white-200">
              {item.name}
            </h2>
          </div>
        ))}
      </div>

      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

const ProductPage = () => {
  return (
    <>
      <section className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4 md:p-8 py-12 md:py-10 mt-15 md:mt-10">
        {/* Imagem do Produto - Agora com padding e margens responsivas */}
        <div className="w-full md:flex-1 min-w-[250px] max-w-[380px] px-4 md:px-0">
          <img
            src="https://abaniclife.com/wp-content/uploads/2025/06/Produto-RHODY-SENCE-FPS50.png"
            alt="Hidratante FPS50"
            className="w-full h-auto object-contain rounded-lg mx-auto"
            style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Conteúdo do Produto - Melhor espaçamento e alinhamento */}
        <div className="w-full md:flex-1 min-w-[250px] max-w-[500px] flex flex-col gap-4 md:gap-6 px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl text-[#494949] font-light text-center md:text-left">
            Hidratante com FPS50
          </h1>

          <p className="text-[16px] font-bold text-[#ff5722] text-center md:text-left">
            R$ 00,00
          </p>

          <div className="space-y-3 text-center md:text-left">
            <p className="text-[15px] md:text-[16px] text-[#6F6F6F]">
              Recomendação de uso: Textura Hidratante, Aroma: Neutro, FPS50,
              50ml.
            </p>

            <p className="text-[15px] md:text-[16px] text-[#6F6F6F]">
              100% natural, cruelty-free, sem parabênos.
            </p>

            <p className="text-[15px] md:text-[16px] text-[#6F6F6F]">
              Ingredientes: Ácido Hialurônico, Gatuline, Beleides, Esqualano,
              Jojoba, Camomila, FPS Físico.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-[300px] mx-auto md:mx-0">
            <label htmlFor="quantidade" className="text-[15px] text-gray-700">
              Quantidade
            </label>
            <input
              type="number"
              id="quantidade"
              className="w-full border border-gray-300 rounded-md text-center text-[13px] h-8"
              min={0}
              defaultValue={0}
            />
          </div>

          <div className="w-full max-w-[300px] mx-auto md:mx-0">
            <Button
              variant="default"
              style={{
                backgroundColor: "var(--abanic-orange)",
              }}
              className="w-full text-white rounded-md py-3 text-[14px] font-semibold transition-smooth hover-lift disabled:opacity-50"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--abanic-orange-dark)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--abanic-orange)")
              }
            >
              Comprar agora
            </Button>
          </div>
        </div>
      </section>

      <PrincipiosAtivos />
    </>
  );
};

export default ProductPage;
