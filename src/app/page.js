import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { RecentUpdates } from "./components/RecentUpdates/RecentUpdates";
import StoreSelector from "./components/StoreSelector/StoreSelector";

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
