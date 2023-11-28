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

  return (
    <div className="bg-gray-100 rounded shadow w-full p-10">
      <h2 className="text-2xl font-semibold mb-8">Dashboard Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {activities.map((activity, i) => {
          return (
            <div key={i} className="bg-gradient-to-r from-primary to-transparent text-black flex justify-center items-center h-32 rounded shadow">
              <div className="text-gray-700 text-center">
              <h1 className="text-3xl font-bold">{activity.timestamp}</h1>
              <p className="text-2xl font-semibold">{activity.action}dsa</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
