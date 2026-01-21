const OverviewSection = () => {
  const stats = [
    { label: 'Total Pages', value: '28', change: '+3', icon: 'ri-pages-line', color: 'blue' },
    { label: 'Published Content', value: '156', change: '+12', icon: 'ri-article-line', color: 'green' },
    { label: 'Media Files', value: '342', change: '+24', icon: 'ri-image-line', color: 'purple' },
    { label: 'Site Visitors', value: '12.4K', change: '+8.2%', icon: 'ri-user-line', color: 'orange' },
  ];

  const recentActivities = [
    { action: 'Updated About Us page', user: 'Admin', time: '2 hours ago', icon: 'ri-edit-line', color: 'blue' },
    { action: 'Published new blog post', user: 'Editor', time: '5 hours ago', icon: 'ri-file-text-line', color: 'green' },
    { action: 'Uploaded 12 images', user: 'Admin', time: '1 day ago', icon: 'ri-upload-line', color: 'purple' },
    { action: 'Modified Solar Energy page', user: 'Admin', time: '2 days ago', icon: 'ri-pencil-line', color: 'orange' },
  ];

  const quickActions = [
    { label: 'Create Page', icon: 'ri-file-add-line', color: 'bg-blue-500' },
    { label: 'Upload Media', icon: 'ri-upload-2-line', color: 'bg-purple-500' },
    { label: 'Manage Users', icon: 'ri-user-settings-line', color: 'bg-orange-500' },
    { label: 'View Analytics', icon: 'ri-line-chart-line', color: 'bg-green-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-green-100">Here's what's happening with your website today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-${stat.color}-50`}>
                <i className={`${stat.icon} text-2xl text-${stat.color}-600`}></i>
              </div>
              <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded whitespace-nowrap">
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all text-left whitespace-nowrap"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${action.icon} text-white text-lg`}></i>
                </div>
                <span className="font-medium text-gray-900">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-${activity.color}-50`}>
                  <i className={`${activity.icon} text-${activity.color}-600`}></i>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    by {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-4">System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Website Status</p>
              <p className="text-xs text-gray-500">All systems operational</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Server Response</p>
              <p className="text-xs text-gray-500">45ms average</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Database</p>
              <p className="text-xs text-gray-500">Healthy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
