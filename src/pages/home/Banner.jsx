import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import '../../App.css'
import { FaPhone, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaRegArrowAltCircleRight } from 'react-icons/fa';

const Banner = () => {
    const slides = [
        {
            name: 'Barger',
            img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: 'Barger',
            img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: 'Barger',
            img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: 'Barger',
            img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
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
                            <div className="absolute inset-0 z-1 w-1/2 mx-auto flex flex-col gap-6 justify-center items-center">
                                <h1 className="text-4xl font-semibold text-white font-serif">Wellcome to Swader Songe</h1>
                            <button className="flex justify-center items-center gap-1 inset-0 text-xl px-5 py-1 font-semibold text-white border-2 border-orange-500 rounded-full">
                                <span>Explore</span>
                                <FaRegArrowAltCircleRight className="text-2xl "></FaRegArrowAltCircleRight>
                            </button>
                            <div className="flex justify-center items-center gap-2 text-white text-2xl">
                                <FaPhone></FaPhone>
                            <p className="">1246-5568-1325</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 text-white text-2xl">
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