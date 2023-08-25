"use client";
import React from "react";
import { TestominalData } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
// Css
import "./slider.css";
import { TestominalCard } from "./TestominalCard";

const TestominalSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-9/12  overflow-hidden cursor-grabbing rounded-lg"
      >
        {TestominalData.map((item, i) => (
          <SwiperSlide key={i} className=" rounded-lg">
            <TestominalCard
              headText={item.headText}
              descText={item.desText}
              imgUrl={item.imgUrl}
              name={item.name}
              postion={item.position}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestominalSlider;
