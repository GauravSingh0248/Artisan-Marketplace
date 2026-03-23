function Dashboard() {
  return (
    <div className="mt-16 relative h-[520px] w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/dashboard/girl_pot.png"
        alt="hero"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-20 text-white">
        
        {/* Tag */}
        <span className="bg-pink-500/30 text-pink-300 px-4 py-1 rounded-full text-sm w-fit mb-4">
          HANDCRAFTED EXCELLENCE
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Curated Treasures <br />
          <span className="text-blue-400 italic">
            Artistically
          </span>{" "}
          Made.
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-xl text-gray-200">
          Discover a global marketplace for unique, handcrafted goods.
          We connect conscious collectors with the world's most talented
          independent artisans.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
            Shop Collections
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">
            Meet the Artisans
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;