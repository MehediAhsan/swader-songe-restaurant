import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import '../../App.css'

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
        <div className="w-full">
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
                        <div key={slide.name}>
                            <img src={slide.img} className="h-screen" />
                            {/* <p className="legend">{slide.name}</p> */}
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
};

export default Banner;