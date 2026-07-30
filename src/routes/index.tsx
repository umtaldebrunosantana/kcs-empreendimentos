import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppFab } from "@/components/kcs/primitives";
import {
  AreaAtuacao,
  Clientes,
  ComoFunciona,
  CtaFinal,
  Diferenciais,
  Dores,
  Footer,
  Hero,
  Servicos,
  Sobre,
} from "@/components/kcs/sections";

const TITLE = "Estruturas Metálicas e Serralheria Industrial em Belo Horizonte | KCS";
const DESCRIPTION =
  "Fabricação própria de estruturas metálicas, galpões, mezaninos, portões e serralheria industrial em BH e região. Mais de 20 anos de experiência. Orçamento rápido pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <main>
        <Clientes />
        <Dores />
        <Diferenciais />
        <Servicos />
        <ComoFunciona />
        <AreaAtuacao />
        <Sobre />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
