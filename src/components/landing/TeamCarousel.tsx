"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./TeamCarousel.module.css";

const team = [
  {
    name: "John Doe",
    role: "Descripción de su puesto",
    image: "/image1.jpg",
  },
  {
    name: "John Doe",
    role: "Descripción de su puesto",
    image: "/image2.jpg",
  },
  {
    name: "John Doe",
    role: "Descripción de su puesto",
    image: "/image3.jpg",
  },
  {
    name: "John Doe",
    role: "Descripción de su puesto",
    image: "/image1.jpg",
  },
  {
    name: "John Doe",
    role: "Descripción de su puesto",
    image: "/image2.jpg",
  },
  {
    name: "John Doe",
    role: "Descripción de su puesto",
    image: "/image1.jpg",
  },
  {
    name: "John Doe",
    role: "Descripción de su puesto",
    image: "/image2.jpg",
  },
  {
    name: "John Doe",
    role: "Descripción de su puesto",
    image: "/image1.jpg",
  },
  {
    name: "John Doe",
    role: "Descripción de su puesto",
    image: "/image2.jpg",
  },
];

export default function TeamCarousel() {
  return (
    <div className={styles.teamCarouselWrapper}>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        navigation={false}
        pagination={false}
        breakpoints={{
          700: { slidesPerView: 3 },
          1100: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className={styles.mySwiper}
        allowTouchMove={true}
        modules={[Autoplay]}
      >
        {team.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.card}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.img}
              />
              <div className={styles.infoBox}>
                <div className={styles.name}>{member.name}</div>
                <div className={styles.role}>{member.role}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
