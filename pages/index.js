import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Banner from "../components/home/banner"
import Welcome from "../components/home/welcome";
import FeatureProjects from "../components/home/feature_projects";
import Services from "../components/home/services";
import News from "../components/home/news";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header />

      <Banner/>

      <Welcome/>

      <FeatureProjects/>
      
      <Services/>

      <News/>

      <Footer />
    </div>
  );
}
