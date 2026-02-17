import Footer from "./components/Homepage/Footer/Footer";
import Header from "./components/Homepage/Header/Header";
import Hero from "./components/Homepage/Hero/Hero";
import { RecentUpdates } from "./components/Homepage/RecentUpdates/RecentUpdates";
import StoreSelector from "@/app/components/Homepage/StoreSelector/StoreSelector";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StoreSelector />
      <RecentUpdates />
      <Footer />
    </>
  );
}
