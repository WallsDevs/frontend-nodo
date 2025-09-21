"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./CoursesCarousel.module.css";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const courses: CourseCardProps[] = [
  {
    image: "/image1.jpg",
    price: "120 USD",
    title:
      "Herramientas Digitales para Arquitectura (AutoCAD + SketchUp + Revit)",
    description:
      "Capacitación práctica en las principales herramientas digitales para el diseño arquitectónico. El curso guía paso a paso en modelado 2D y 3D, renderizado básico y preparación de planos profesionales.",
    lessons: 34,
    tests: 4,
    rating: 4,
  },
  {
    image: "/image2.jpg",
    price: "140 USD",
    title: "Diseño de interiores contemporáneo",
    description:
      "Aprende a conceptualizar y ejecutar proyectos de interiorismo modernos, desde la planificación espacial hasta la selección de materiales y acabados.",
    lessons: 34,
    tests: 4,
    rating: 4,
  },
  {
    image: "/image3.jpg",
    price: "150 USD",
    title: "Arquitectura Sostenible y Materiales Eco-Friendly",
    description:
      "Explora principios de la arquitectura sostenible aplicados a proyectos residenciales y comerciales. Aprende sobre selección de materiales eco-friendly, eficiencia energética, normativas actuales...",
    lessons: 34,
    tests: 4,
    rating: 4,
  },
  {
    image: "/image1.jpg",
    price: "120 USD",
    title:
      "Herramientas Digitales para Arquitectura (AutoCAD + SketchUp + Revit)",
    description:
      "Capacitación práctica en las principales herramientas digitales para el diseño arquitectónico. El curso guía paso a paso en modelado 2D y 3D, renderizado básico y preparación de planos profesionales.",
    lessons: 34,
    tests: 4,
    rating: 4,
  },
  {
    image: "/image2.jpg",
    price: "140 USD",
    title: "Diseño de interiores contemporáneo",
    description:
      "Aprende a conceptualizar y ejecutar proyectos de interiorismo modernos, desde la planificación espacial hasta la selección de materiales y acabados.",
    lessons: 34,
    tests: 4,
    rating: 4,
  },
  {
    image: "/image3.jpg",
    price: "150 USD",
    title: "Arquitectura Sostenible y Materiales Eco-Friendly",
    description:
      "Explora principios de la arquitectura sostenible aplicados a proyectos residenciales y comerciales. Aprende sobre selección de materiales eco-friendly, eficiencia energética, normativas actuales...",
    lessons: 34,
    tests: 4,
    rating: 4,
  },
];

export default function CoursesCarousel() {
  const router = useRouter();
  return (
    <div className="relative">
      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          cssMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            700: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className={styles.mySwiper}
        >
          {courses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
          <button
            className="swiper-button-prev"
            type="button"
            aria-label="Anterior"
          >
            <FaArrowLeft color="#ffffff" />
          </button>
          <button
            className="swiper-button-next"
            type="button"
            aria-label="Siguiente"
          >
            <FaArrowRight color="#ffffff" />
          </button>
        </Swiper>
        <div className={styles.yellowCtaWrapper}>
          <button
            className={styles.yellowCtaBtn}
            type="button"
            onClick={() => router.push("/registro")}
          >
            Regístrate aquí para acceder a nuestros cursos
            <span className={styles.arrowIcon}>
              <FaArrowRight color="#ffffffff" />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.backgroundBlack}></div>
    </div>
  );
}
