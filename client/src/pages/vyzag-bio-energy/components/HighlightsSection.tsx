export function HighlightsSection() {
  const highlights = [
    {
      title: 'The First Biogas Plant',
      description: 'in Andhra Pradesh, leading the conversion of municipal waste into CBG/Bio-CNG.'
    },
    {
      title: 'The First in the North Coastal Districts',
      description: 'of Andhra Pradesh to partner with an Oil Marketing Company (OMC) for CBG supply.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="h-[500px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url(https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/Vjzag-gallery02.jpg)'
            }}
          ></div>
          
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              To Highlight
            </h2>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-green-600 flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {highlight.title.split(' ').map((word, i) => {
                        if (word === 'First' || word === 'Biogas' || word === 'Plant' || word === 'North' || word === 'Coastal' || word === 'Districts') {
                          return <span key={i} className="text-green-600">{word} </span>;
                        }
                        return word + ' ';
                      })}
                    </h3>
                    <p className="text-gray-700">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
