export function ValuesSection() {
  const values = [
    {
      letter: 'P',
      title: 'Principled Excellence',
      description: 'Doing what\'s right, with integrity and intention',
      color: 'bg-green-600'
    },
    {
      letter: 'A',
      title: 'Authenticity',
      description: 'Bringing your true self to work, and honouring that in others.',
      color: 'bg-green-700'
    },
    {
      letter: 'C',
      title: 'Customer Value',
      description: 'Keeping our customers at the heart of everything we do.',
      color: 'bg-green-600'
    },
    {
      letter: 'E',
      title: 'Esteem Culture',
      description: 'Fostering a workplace where respect, dignity, and belonging are everyday experiences.',
      color: 'bg-green-700'
    }
  ];

  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-6`}>
                  <span className="text-3xl font-bold text-white">{value.letter}</span>
                </div>
                <h6 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h6>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
