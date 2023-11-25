
const Dashboard = () => {
  const activities = [
    {
      timestamp: '2 hours ago',
      action: 'User logged in',
    },
    {
      timestamp: '1 day ago',
      action: 'Data updated',
    },
    {
      timestamp: '3 days ago',
      action: 'New tasks created',
    },
    {
      timestamp: '1 week ago',
      action: 'Product added',
    },
  ];

  return (
    <div className="bg-gray-100 rounded shadow w-full p-10">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Content</h2>
      <p>
        Welcome to your dashboard! This is a simple example of a dashboard content section. You can customize and add various components, charts, or data visualizations here.
      </p>
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
        <ul className="list-none">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
              <span>{activity.action}</span>
              <span className="text-gray-500">{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Additional Section: Statistics */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Statistics</h3>
        <p>Display your statistics or charts here.</p>
        {/* Add your statistics or charts components here */}
      </div>

      {/* Additional Section: Tasks */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Tasks</h3>
        <ul className="list-none">
          {/* Add your tasks components here */}
          <li className="flex items-center justify-between border-b border-gray-300 py-2">
            <span>Task 1</span>
            <span className="text-gray-500">Due Date: Tomorrow</span>
          </li>
          <li className="flex items-center justify-between border-b border-gray-300 py-2">
            <span>Task 2</span>
            <span className="text-gray-500">Due Date: Next week</span>
          </li>
          {/* Add more tasks as needed */}
        </ul>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Dashboard;
