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

import "./slider.css";

// import required modules
import { Pagination } from "swiper";

const SimilarSlider = ({ genres }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (genres) dispatch(getSimilar(genres, 10));
  }, [dispatch, genres]);

  const similar = useSelector((state) => state.singleAnime);

  if (similar.loading)
    return (
      <div className="slider-container">
        <Loader />
      </div>
    );

  if (similar.similar.length <= 0)
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
        modules={[Pagination]}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        {similar.similar.map((card) => (
          <SwiperSlide key={card.id}>
            <Card anime={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarSlider;
