import { FaCalendarAlt } from 'react-icons/fa';

const eventsAndPromotionsData = [
    {
        title: 'Special Wine Tasting Event',
        date: 'October 15, 2023',
        description: 'Join us for an exclusive wine tasting experience featuring a selection of fine wines from around the world.',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80',
    },
    {
        title: 'Weekend Happy Hour',
        date: 'Every Friday and Saturday',
        description: 'Enjoy our delightful cocktails and appetizers at half price during our weekend happy hours!',
        image: 'https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
];

const EventsAndPromotions = () => {
    return (
        <div className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">Upcoming Events and Promotions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {eventsAndPromotionsData.map((event, index) => (
                        <div key={index} className="bg-white shadow-md p-6 rounded-md event-card">
                            <img src={event.image} alt={event.title} className="mb-4 rounded-md" />
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <div className="flex items-center text-gray-500 mb-4">
                                <FaCalendarAlt className="mr-2" />
                                <span>{event.date}</span>
                            </div>
                            <p className="text-gray-700 mb-6">{event.description}</p>
                            <div className="promo-message">Limited Seats Available! Book Your Spot Now!</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsAndPromotions;
