import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import ProductRender from "@/app/components/Renderers/ProductRender/ProductRender";
import StoreSelector from "@/app/components/Renderers/StoreSelector/StoreSelector";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StoreSelector />
      <ProductRender />
      <Footer />
    </>
  );
}
