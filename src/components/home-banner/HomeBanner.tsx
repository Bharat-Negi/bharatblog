"use client";
import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import notesContext from "@/context/notes/notesContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Images
import Image from "../../../public/images/post-slide-1.jpg";

export default function HomeBanner() {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const { homeBanner } = useContext(notesContext);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  if (!loadSwiper) {
    return null; // or a loading skeleton
  }

  return (
    <section className="slider section dark-background">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, el: null }}
          autoplay={{ delay: 3000 }}
        >
          {homeBanner.map((banner: any) => (
            <SwiperSlide style={{ backgroundImage: `url(${banner.imgUrl})` }}>
            <div className="content" key={banner.id}>
              <h2>
                <a href="single-post.html">
                  {banner.heading}
                </a>
              </h2>
              <p>
                {banner.shortNote}
              </p>
            </div>
          </SwiperSlide>
          ))}

          
        </Swiper>
      </div>
    </section>
  );
}
