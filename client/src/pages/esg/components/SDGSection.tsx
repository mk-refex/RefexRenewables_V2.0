export function SDGSection() {
  const sdgGoals = [
    {
      title: 'Quality Education',
      icon: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-04.jpg',
      description: 'Empowering young minds! We collaborate with local government schools to provide computer literacy programs for high school students, preparing them for a brighter future. #EducationForAll #Empowerment'
    },
    {
      title: 'Affordable & Clean Energy',
      icon: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-07.jpg',
      description: 'At RRIL, our renewable energy business is revolutionizing the industry with affordable solar power solutions for private and government agencies. We\'re proud to be a trusted partner of the Indian Railways in their energy transition mission and even have our solar footprint at the highest peak of the Himalayas. #ClimateAction #CleanEnergy'
    },
    {
      title: 'Climate Action',
      icon: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-13.jpg',
      description: 'RRIL\'s focus on renewable energy and waste-to-energy solutions directly aligns with UN Sustainable Development Goal 13: Climate Action by accelerating the shift to clean energy and reducing reliance on fossil fuels. Through large-scale solar installations and CBG production from MSW, RRIL contributes significantly to avoided emissions and plays a vital role in the mitigation of climate change.'
    },
    {
      title: 'Life on Land',
      icon: 'https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-15.jpg',
      description: 'Refex\'s initiatives create a better life on land! "Plant for Future" will see 1,00,000 trees planted, while our coal and ash handling business rehabilitates abandoned mines. And we are supporting sustainable agriculture by offering land to local farmers for free. Let\'s make a better world together!'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/global-goals.png" 
              alt="Global Goals"
              className="h-24"
            />
          </div>
          <div className="flex justify-center gap-4 mb-12">
            <img src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-04.jpg" alt="SDG 4" className="w-20 h-20 rounded-lg shadow-md" />
            <img src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-07.jpg" alt="SDG 7" className="w-20 h-20 rounded-lg shadow-md" />
            <img src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-13.jpg" alt="SDG 13" className="w-20 h-20 rounded-lg shadow-md" />
            <img src="https://rril-website.local.sharajman.com/wp-content/uploads/2025/10/E_SDG_Icons-15.jpg" alt="SDG 15" className="w-20 h-20 rounded-lg shadow-md" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Sustainable Development Goals</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              We're dedicated to making the world a better place! By working with India and the UN to advance the Sustainable Development Goals, we believe that together, we can create meaningful change. Our focus goes beyond shareholder value—we aim to generate positive impact for people, communities, and the planet.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As proud members of the UN Global Compact, we collaborate with partners worldwide, champion ethical business practices, and tackle some of today's biggest challenges. Let's build a better world, together!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sdgGoals.map((goal, index) => (
            <div key={index} className="group perspective-1000">
              <div className="relative h-96 transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden shadow-lg">
                  <div className="relative h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-50 to-green-100">
                    <img 
                      src={goal.icon} 
                      alt={goal.title}
                      className="w-32 h-32 mb-6 rounded-lg shadow-md"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 text-center">{goal.title}</h3>
                  </div>
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg overflow-hidden shadow-lg">
                  <div className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-600 to-green-700 text-white">
                    <h3 className="text-2xl font-bold mb-4 text-center">{goal.title}</h3>
                    <p className="text-base leading-relaxed text-center">{goal.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
