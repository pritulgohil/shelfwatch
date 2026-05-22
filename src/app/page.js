import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Hero from "../components/Layout/Hero/Hero";
import ReportRender from "@/components/Renderers/ReportRender/ReportRender";
import StoreSelector from "@/components/Renderers/StoreSelector/StoreSelector";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StoreSelector />
      <div className={styles.sectionHeader}>Recent Reports</div>
      <ReportRender />
      <Footer />
    </>
  );
}
