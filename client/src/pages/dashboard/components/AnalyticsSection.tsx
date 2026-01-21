const AnalyticsSection = () => {
  const metrics = [
    { label: 'Page Views', value: '45.2K', change: '+12.5%', trend: 'up', icon: 'ri-eye-line' },
    { label: 'Unique Visitors', value: '12.4K', change: '+8.2%', trend: 'up', icon: 'ri-user-line' },
    { label: 'Avg. Session Duration', value: '3m 24s', change: '+5.3%', trend: 'up', icon: 'ri-time-line' },
    { label: 'Bounce Rate', value: '42.8%', change: '-3.1%', trend: 'down', icon: 'ri-arrow-go-back-line' },
  ];

  const topPages = [
    { page: 'Home', views: '12.4K', visitors: '8.2K', duration: '4m 12s' },
    { page: 'About Us', views: '8.3K', visitors: '5.6K', duration: '5m 34s' },
    { page: 'Solar Energy', views: '6.7K', visitors: '4.2K', duration: '3m 45s' },
    { page: 'Contact', views: '4.2K', visitors: '3.1K', duration: '2m 18s' },
    { page: 'Investors', views: '3.8K', visitors: '2.4K', duration: '6m 22s' },
  ];

  const trafficSources = [
    { source: 'Organic Search', percentage: 45, visitors: '5.6K', color: 'bg-blue-500' },
    { source: 'Direct', percentage: 28, visitors: '3.5K', color: 'bg-green-500' },
    { source: 'Social Media', percentage: 18, visitors: '2.2K', color: 'bg-purple-500' },
    { source: 'Referral', percentage: 9, visitors: '1.1K', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your website performance</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-50">
                <i className={`${metric.icon} text-2xl text-green-600`}></i>
              </div>
              <span className={`text-sm font-semibold px-2 py-1 rounded whitespace-nowrap ${
                metric.trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</h3>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Top Performing Pages</h2>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                    <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{page.page}</p>
                    <p className="text-xs text-gray-500">{page.duration} avg. duration</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{page.views}</p>
                  <p className="text-xs text-gray-500">{page.visitors} visitors</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Traffic Sources</h2>
          <div className="space-y-5">
            {trafficSources.map((source, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{source.source}</span>
                  <span className="text-sm font-semibold text-gray-900">{source.percentage}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${source.color} transition-all duration-500`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap">{source.visitors}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">Total Visitors</span>
              <span className="text-lg font-bold text-gray-900">12.4K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Device & Location Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Stats */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Device Breakdown</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <i className="ri-computer-line text-2xl text-gray-600"></i>
                <span className="font-medium text-gray-900">Desktop</span>
              </div>
              <span className="font-semibold text-gray-900">62%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <i className="ri-smartphone-line text-2xl text-gray-600"></i>
                <span className="font-medium text-gray-900">Mobile</span>
              </div>
              <span className="font-semibold text-gray-900">32%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <i className="ri-tablet-line text-2xl text-gray-600"></i>
                <span className="font-medium text-gray-900">Tablet</span>
              </div>
              <span className="font-semibold text-gray-900">6%</span>
            </div>
          </div>
        </div>

        {/* Top Locations */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Top Locations</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-green-50 rounded">
                  <span className="text-xs font-bold text-green-700">IN</span>
                </div>
                <span className="font-medium text-gray-900">India</span>
              </div>
              <span className="font-semibold text-gray-900">8.2K</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-blue-50 rounded">
                  <span className="text-xs font-bold text-blue-700">US</span>
                </div>
                <span className="font-medium text-gray-900">United States</span>
              </div>
              <span className="font-semibold text-gray-900">2.1K</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-purple-50 rounded">
                  <span className="text-xs font-bold text-purple-700">UK</span>
                </div>
                <span className="font-medium text-gray-900">United Kingdom</span>
              </div>
              <span className="font-semibold text-gray-900">1.4K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
