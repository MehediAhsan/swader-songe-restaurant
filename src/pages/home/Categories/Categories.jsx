import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import SectionHeading from "../../../components/SectionHeading";
import { useState } from 'react';
import { useEffect } from 'react';

const Categories = () => {
  let [items, setItems] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
            const specialItems = data.filter(item => item.category === 'soup')
            setItems(specialItems)
        })

    },[])
  return (
    <div className="w-10/12 mx-auto">
      <SectionHeading
        sub={"---From 11:00am to 10:00pm---"}
        main={"ORDER ONLINE"}
      ></SectionHeading>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          // When window width is >= 640px, show 2 slides
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When window width is >= 768px, show 3 slides
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // When window width is >= 1024px, show 4 slides
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-md relative cursor-pointer">
              <img src={item.image} alt="" className="w-full h-72 rounded-md" />
              <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition-all duration-500 border-2 border-orange-600 hover:border-white"></div>
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl uppercase font-medium mt-20">
                {item.category}
              </h1>
              <div className="mb-14"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
