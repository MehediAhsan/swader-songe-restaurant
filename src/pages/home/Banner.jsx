import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import '../../App.css'
import { FaPhone, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Banner = () => {
    const slides = [
        {
            name: 'Barger',
            img: 'https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80'
        },
        {
            name: 'Barger',
            img: 'https://images.unsplash.com/photo-1551529834-525807d6b4f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1431&q=80'
        },
        {
            name: 'Barger',
            img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: 'Barger',
            img: 'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
    ]
    return (
        <div className="w-full relative">
            <Carousel showArrows={true}
      infiniteLoop={true}
      showThumbs={true}
      showStatus={false}
      autoPlay={true}
      interval={3000} // Change the interval as needed
      stopOnHover={false}
      dynamicHeight={true}
      emulateTouch={true}
      useKeyboardArrows={true}
      swipeable={true}
      >
                {
                    slides.map(slide => 
                        <div key={slide.name} className="">
                            <img src={slide.img} className="h-screen" />
                            {/* <p className="legend">{slide.name}</p> */}
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute inset-0 z-1 w-1/2 mx-auto flex flex-col gap-3 md:gap-6 justify-center items-center">
                                <h1 className="text-2xl md:text-4xl font-semibold text-white font-serif">Wellcome to Swader Songe</h1>
                            <button className="flex justify-center items-center gap-1 inset-0 text-xl px-3 py-1 font-semibold text-white border rounded-full bg-orange-500">
                                <Link to="/shop"><span>Explore</span></Link>
                                <FaRegArrowAltCircleRight className="text-2xl "></FaRegArrowAltCircleRight>
                            </button>
                            <div className="flex justify-center items-center gap-2 text-white text-lg md:text-2xl">
                                <FaPhone></FaPhone>
                            <p className="">1246-5568-1325</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 text-white text-lg md:text-2xl">
                                <span>Follow Us:</span>
                                <FaFacebook></FaFacebook>
                                <FaInstagram></FaInstagram>
                                <FaYoutube></FaYoutube>
                                <FaTwitter></FaTwitter>
                            </div>
                            </div>
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
};

export default Banner;