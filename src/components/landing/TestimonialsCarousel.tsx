import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./TestimonialsCarousel.module.css";

const testimonials = [
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image1.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image2.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image3.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image2.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image2.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image3.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image2.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image2.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image3.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image2.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image2.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image3.jpg",
  },
  {
    text: "Lorem ipsum euismod ornare hendrerit euismod turpis",
    name: "John Doe",
    role: "Descripción de su puesto",
    avatar: "/image2.jpg",
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className={styles.testimonialsBg}>
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        loop={true}
        breakpoints={{
          700: { slidesPerView: 2 },
          1100: { slidesPerView: 4 },
        }}
        className={styles.mySwiper}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.card}>
              <div className={styles.quoteIcon}>“</div>
              <div className={styles.text}>{t.text}</div>
              <div className={styles.userRow}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
