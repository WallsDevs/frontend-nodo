"use client";
import { Typography } from "antd";
import Footer from "@/components/footer/Footer";
import FooterCta from "@/components/footer/FooterCta";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import Menu from "../menu";
import SectionTitle from "../SectionTitle";
import BarStats from "./BarStats";
import Carousel from "./CarouselMain";
import CoursesCarousel from "@/components/landing/CoursesCarousel";
import ServiciosSelector from "./ServiciosSelector";
import RenderCarousel from "./RenderCarousel";
import TeamCarousel from "./TeamCarousel";
import styles from "./LandingMain.module.css";

export default function LandingMain() {
  return (
    <>
      <Menu />
      <div className="px-20">
        <Carousel />
        <BarStats />
      </div>
      <div className={styles.backgroundWhite}>
        <SectionTitle
          text="Nuestros servicios"
          highlightLast={1}
          buttonType="redOutlineBlack"
          buttonText="Mira como lo hacemos"
          onButtonClick={() => alert("RedOutlineBlackButton clicked!")}
        />

        <ServiciosSelector />
      </div>
      <div className="px-20 mt-20 mb-20">
        <SectionTitle
          text="Proyectos Destacados"
          buttonType="redIcon"
          buttonText="Ver portafolio"
          onButtonClick={() => alert("RedButtonWithIcon clicked!")}
        />
        <RenderCarousel />
      </div>
      {/* Carrusel de equipo */}
      <div className="mt-20 mb-20" id="quienes-somos">
        <SectionTitle text="Quiénes Somos" alignRight={true} />
        <div className={styles.quienesSomosRight}>
          <Typography.Paragraph
            style={{ textAlign: "right", maxWidth: 700, marginRight: 50 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
            {/* Footer ahora está en el layout público */}
            turpis egestas.
          </Typography.Paragraph>
        </div>
        <TeamCarousel />
      </div>

      <SectionTitle text="Nuestros Cursos" alignRight={false} />
      <CoursesCarousel />

      <div className={styles.backgroundWhite}>
        <SectionTitle
          text="Experiencia de nuestros clientes"
          highlightLast={2}
          alignRight={false}
        />
        <TestimonialsCarousel />
      </div>
      <FooterCta />
      <Footer />
    </>
  );
}
