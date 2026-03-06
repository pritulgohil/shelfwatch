import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ReportRender from "@/app/components/ReportRender/ReportRender";
import StoreSelector from "@/app/components/StoreSelector/StoreSelector";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StoreSelector />
      <ReportRender />
      <Footer />
    </>
  );
}
