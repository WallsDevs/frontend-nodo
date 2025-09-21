"use client";
import React, { useState, useEffect } from "react";
import styles from "./ServiciosSelector.module.css";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";

const servicios = [
  {
    key: "arquitectura",
    label: "Arquitectura",
    icon: "/Office.svg", // Cambia por SVG o icono real
    image: "/image2.jpg",
  },
  {
    key: "interiorismo",
    label: "Interiorismo",
    icon: "/Interior.svg",
    image: "/image3.jpg",
  },
  {
    key: "consultoria",
    label: "Consultoría",
    icon: "/Consulting.svg",
    image: "/image1.jpg",
  },
  {
    key: "cursos",
    label: "Cursos Online",
    icon: "/Online.svg",
    image: "/image2.jpg",
  },
];

export default function ServiciosSelector() {
  const [selected, setSelected] = useState(servicios[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => {
        const idx = servicios.findIndex((s) => s.key === prev.key);
        return servicios[(idx + 1) % servicios.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {servicios.map((servicio) => (
          <button
            key={servicio.key}
            className={
              styles.servicioBtn +
              (selected.key === servicio.key ? " " + styles.dark : "")
            }
            onClick={() => setSelected(servicio)}
            type="button"
          >
            <span className={styles.iconBox}>
              <Image
                src={servicio.icon}
                alt={servicio.label}
                width={48}
                height={48}
                className={styles.icon}
              />
            </span>
            <span className={styles.label}>{servicio.label}</span>
            <ArrowRightOutlined className={styles.arrow} />
          </button>
        ))}
      </div>
      <div className={styles.right}>
        <div className={styles.mainImageWrapper}>
          <Image
            src={selected.image}
            alt={selected.label}
            fill
            className={styles.mainImage}
            sizes="(max-width: 900px) 100vw, 700px"
          />
          <div className={styles.ctaBox}>
            <div className={styles.ctaText}>
              ¿Te gustaría iniciar tu proyecto con nosotros?
            </div>
            <button className={styles.ctaBtn} type="button">
              Contacta con nuestros profesionales
              <span className={styles.ctaBtnIcon}>
                <ArrowRightOutlined />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
