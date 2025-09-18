"use client";
import {
  RedButton,
  RedButtonbgBlack,
  RedButtonWithIcon,
  RedOutlineBlackButton,
  BlackButton,
} from "../CustomButtons";
import Menu from "../menu";
import SectionTitle from "../SectionTitle";
import BarStats from "./BarStats";
import Carousel from "../Carousel";
import ServiciosSelector from "./ServiciosSelector";
import RenderCarousel from "./RenderCarousel";
import styles from "./LandingMain.module.css";

export default function LandingMain() {
  return (
    <div>
      <div className="px-20">
        <Menu />
        <Carousel />
        <BarStats />
      </div>
      <div className={styles.cardServicios}>
        <SectionTitle
          text="Nuestros servicios"
          highlightLast={1}
          buttonType="redOutlineBlack"
          buttonText="Mira como lo hacemos"
          onButtonClick={() => alert("RedOutlineBlackButton clicked!")}
        />
        <ServiciosSelector />
      </div>

      <RenderCarousel />
      <SectionTitle
        text="Nuestros servicios"
        buttonType="redIcon"
        buttonText="Ver portafolio"
        onButtonClick={() => alert("RedButtonWithIcon clicked!")}
      />
      {/* SectionTitle with RedOutlineBlackButton */}
      {/* SectionTitle without button, right aligned */}
      <SectionTitle text="Quiénes Somos" alignRight={true} />
      {/* SectionTitle without button, left aligned */}
      <SectionTitle text="Quiénes Somos" alignRight={false} />
      <RedButtonWithIcon>Ver portafolio</RedButtonWithIcon>
      <RedOutlineBlackButton>Mira como lo hacemos</RedOutlineBlackButton>
      <RedButtonbgBlack>Mira como lo hacemos</RedButtonbgBlack>
      <RedButton>Contáctanos</RedButton>
      <BlackButton>Contáctanos</BlackButton>
    </div>
  );
}
