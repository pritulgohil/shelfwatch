import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import Hero from "../components/layout/Hero/Hero";
import ReportRender from "@/components/reports/ReportList/ReportList";
import StoreSelector from "@/components/stores/StoreSelector/StoreSelector";
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
