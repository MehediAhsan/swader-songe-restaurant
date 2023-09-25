import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import SectionHeading from "../../../components/SectionHeading";

const Categories = () => {
  const items = [
    {
      name: "Salad",
      img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80",
    },
    {
      name: "Salad",
      img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80",
    },
    {
      name: "Salad",
      img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80",
    },
    {
      name: "Salad",
      img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80",
    },
    {
      name: "Salad",
      img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80",
    },
    {
      name: "Salad",
      img: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80",
    },
  ];
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
            <div className="border rounded-md p-2">
              <img src={item.img} alt="" className="w-full h-72 rounded-md" />
              <h1 className="pb-16 -mt-10 text-center text-white text-3xl">
                {item.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
