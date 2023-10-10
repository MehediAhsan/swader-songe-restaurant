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
            <SectionBox title={"contact us"} img="https://images.unsplash.com/1/macbook-air-all-faded-and-stuff.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"></SectionBox>
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
            <div className="w-10/12 mx-auto p-6 shadow-md rounded-md bg-gray-100 mb-20">
            
            <form className="space-y-4 w-5/12 mx-auto">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name:</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email:</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" required />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message:</label>
                    <textarea id="message" name="message" className="mt-1 p-2 w-full border rounded-md" rows="4" required></textarea>
                </div>
                <button type="submit" className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition duration-300">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default ContactUs;