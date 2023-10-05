import SectionHeading from "../../components/SectionHeading";
import SectionBox from "../shared/SectionBox";
import { FaLocationArrow, FaPhone, FaTimesCircle } from 'react-icons/fa';

const ContactUs = () => {
    const places =[
        {
            name: 'phone',
            icon: <FaPhone></FaPhone>,
            description: '+38 (012) 34 56 789'
        },
        {
            name: 'address',
            icon: <FaLocationArrow></FaLocationArrow>,
            description: '+38 (012) 34 56 789'
        },
        {
            name: 'working hours',
            icon: <FaTimesCircle></FaTimesCircle>,
            description: '+38 (012) 34 56 789'
        },
    ]
    return (
        <div>
            <SectionBox title={"contact us"}></SectionBox>
            <SectionHeading sub={"--Visit Us--"} main={"our location"}></SectionHeading>
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    places.map((location, index) => <div key={index}>
                        <div className="bg-orange-500 text-white text-xl flex justify-center items-center py-3 rounded">
                            {
                                location.icon
                            }
                        </div>
                        <div className="p-14 bg-gray-100 text-center w-10/12 mx-auto">
                            <h1 className="text-xl font-semibold uppercase">{location.name}</h1>
                            <p>{location.description}</p>
                        </div>
                    </div>)
                }
            </div>
            <SectionHeading sub={"-----Send Us a Message-----"} main={"CONTACT FORM"}></SectionHeading>
            <div className="w-10/12 mx-auto bg-gray-200">
                <form action="">
                    <div>
                        <input type="text" className="p-4" />
                        <input type="email" name="" id="" className="p-4" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;