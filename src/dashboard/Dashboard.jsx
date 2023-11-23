
const Dashboard = () => {
  const activities = [
    {
      timestamp: '2 hours ago',
      action: 'User logged in'
    },
    {
      timestamp: '1 day ago',
      action: 'Data updated'
    },
    {
      timestamp: '3 days ago',
      action: 'New tasks created'
    },
    {
      timestamp: '1 week ago',
      action: 'Product added'
    }
  ];

  return (
    <div className="bg-gray-200 rounded shadow w-full p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Content</h2>
      <p>
        Welcome to your dashboard! This is a simple example of a dashboard content section.
        You can customize and add various components, charts, or data visualizations here.
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
        <ul className="list-none">
          {activities.map((activity, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-gray-300 py-2"
            >
              <span>{activity.action}</span>
              <span className="text-gray-500">{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Dashboard;
