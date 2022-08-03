import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import UrbanPlanning from "../components/services/urban_planning";
import ArchitectureDesign from "../components/services/architecture_design";
import LandscapeDesign from "../components/services/landscape_design";
import InteriorDesign from "../components/services/interior_design";
import TechnicalResources from "../components/services/technical_resources";
import ThreeDVisualization from "../components/services/three_d_visualization";
import React, { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    var btnShow = document.getElementById("show-more-1");
    var arrow1 = document.getElementById("arrow-1");
    var projectSection1 = document.getElementById("project-section-1");

    btnShow.onclick = function () {
      if (btnShow.classList.contains("non-active")) {
        btnShow.innerText = "Hide";
        btnShow.classList.remove("non-active");
        btnShow.classList.add("active");
        projectSection1.classList.add("max-h-[1000px]");
        projectSection1.classList.remove('max-h-0');
        projectSection1.classList.add('overflow-visible');
        projectSection1.classList.remove('overflow-hidden');
      } else {
        btnShow.innerText = "Show more";
        btnShow.classList.remove("active");
        btnShow.classList.add("non-active");
        projectSection1.classList.add("max-h-0");
        projectSection1.classList.remove('max-h-[1000px]');
        projectSection1.classList.remove('overflow-visible');
        projectSection1.classList.add('overflow-hidden');
      }
    };
  });

  return (
    <div>
      <Header />

      <UrbanPlanning />

      <ArchitectureDesign />

      <LandscapeDesign />

      <InteriorDesign />

      <TechnicalResources />

      <ThreeDVisualization />

      <Footer />
    </div>
  );
}
