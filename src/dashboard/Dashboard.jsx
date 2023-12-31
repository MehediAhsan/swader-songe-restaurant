
import { useEffect, useState } from "react";

const Dashboard = () => {
  const activities = [
    {
      timestamp: "200",
      action: "User",
    },
    {
      timestamp: "100",
      action: "Data",
    },
    {
      timestamp: "300",
      action: "New tasks",
    },
  ];

  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the preview and the base64-encoded image
        setImage(btoa(reader.result))
        localStorage.setItem("image", btoa(reader.result));
      };

      reader.readAsBinaryString(file);
    }
  };

  useEffect(() => {
     setImage(localStorage.getItem("image"))
  }, [image]);

  return (
    <div className="bg-gray-100 rounded shadow w-full p-10">
      <h2 className="text-2xl font-semibold mb-8">Dashboard Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {activities.map((activity, i) => {
          return (
            <div
              key={i}
              className="bg-gradient-to-r from-primary to-transparent text-black flex justify-center items-center h-32 rounded shadow"
            >
              <div className="text-gray-700 text-center">
                <h1 className="text-3xl font-bold">{activity.timestamp}</h1>
                <p className="text-2xl font-semibold">{activity.action}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-10 divide-y-4 md:divide-y-0 md:divide-x-4 divide-primary">
        <div className="flex flex-col gap-4 justify-center items-center bg-pink-100 p-16">
          <img
            className="h-40 w-40 rounded-full"
            src={`data:image/jpeg;base64,${image}`}
            alt=""
          />
          <h1 className="text-2xl font-semibold">Md Mehedi Ahsan</h1>
          <label className="bg-white px-6 py-2 rounded border-4 text-gray-800 font-medium cursor-pointer">
            Update your picture
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden"/>
          </label>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 bg-yellow-100 text-gray-800">
          <h1 className="text-2xl font-semibold">My Activities</h1>
          <div className="text-xl font-semibold flex flex-col gap-2">
            <span>Oders: 66</span>
            <span>Cart: 66</span>
            <span>Payment: 66</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
