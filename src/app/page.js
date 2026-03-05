import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductRender from "@/app/components/ProductRender/ProductRender";
import StoreSelector from "@/app/components/StoreSelector/StoreSelector";

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
