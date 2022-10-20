import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilar } from "../../actions/anime";
import Card from "../card/Card";
import Loader from "../loader/Loader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SimilarSlider = ({ genres }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimilar(genres, 16));
  }, [dispatch, genres]);

  const similar = useSelector((state) => state.singleAnime);

  if (similar.loading)
    return (
      <div className="slider-container">
        <Loader />
      </div>
    );

  if (similar.similar.length <= 1 || similar.error || genres.length === 0)
    return (
      <div className="slider-container">
        <h2>No results found</h2>
      </div>
    );

  return (
    <div className="slider-container">
      <div className="my-custom-pagination-div"></div>
      <Swiper
        spaceBetween={20}
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
          renderBullet: (index, className) => {
            return "<span class=" + className + "></span>";
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          380: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        {similar.similar.slice(1).map((card) => (
          <SwiperSlide key={card.id}>
            <Card anime={card} />
          </SwiperSlide>
        ))}
        <div className="btn-slide swiper-button-next"></div>
        <div className="btn-slide swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default SimilarSlider;
