import SectionHeading from "../../../components/SectionHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Reviews = () => {
    let [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then (data => setReviews(data))

    },[])
  return (
    <div className="w-10/12 mx-auto">
      <SectionHeading
        sub={"---What out client say---"}
        main={"Customer Reviews"}
      ></SectionHeading>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className="w-9/12 mx-auto text-center">
              <p>{review.details}</p>
              <h1 className="text-2xl uppercase text-orange-500 pt-2">{review.name}</h1>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Reviews;
