const ArtisanStory = () => {
    return (
      <div className="bg-[#3b0008] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Tag */}
            <span className="bg-pink-500/30 text-pink-300 px-4 py-1 rounded-full text-sm">
              Artisan of the Month
            </span>
  
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              "Clay is the language of the soul. Each piece carries a whisper of the earth."
            </h2>
  
            {/* Profile */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src="/images/profile.jpg"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Shirley Setia</p>
                <p className="text-gray-300 text-sm">
                  Founder of Studio VisionU, India
                </p>
              </div>
            </div>
  
            {/* Description */}
            <p className="text-gray-300 mt-6 text-sm leading-relaxed max-w-lg">
              Shirley has been perfecting her craft for over 20 years in the heart of
              the Indian countryside. Her "Terra Collection" combines traditional
              kiln-firing techniques with modern, sculptural silhouettes that
              celebrate imperfection.
            </p>
  
            {/* Button */}
            <button className="mt-6 bg-pink-500 px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition">
              Discover Her Collection
            </button>
          </div>
  
          {/* RIGHT SIDE IMAGES */}
          <div className="flex gap-6 items-center">
            
            {/* Main Image */}
            <img
              src="/images/craftwork.jpg"
              className="w-56 h-72 object-cover rounded-2xl border border-black"
            />
  
            {/* Side Column */}
            <div className="flex flex-col gap-6">
              
              <img
                src="/images/pot.png"
                className="w-40 h-40 object-cover rounded-2xl"
              />
  
              {/* Stats Box */}
              <div className="bg-blue-500 px-6 py-6 rounded-2xl text-center">
                <h3 className="text-2xl font-bold">12k+</h3>
                <p className="text-sm text-blue-100">PIECES CRAFTED</p>
              </div>
  
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default ArtisanStory;