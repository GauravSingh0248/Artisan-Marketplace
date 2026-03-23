import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    category: "Art Studio",
    title: "Abstract Canvas Painting",
    brand: "Studio Canvas",
    price: "₹8,500.00",
    image: "/images/story_featured/img11.jpg",
},
{
    id: 2,
    category: "Artify Studio",
    title: "Handwork Designs",
    brand: "Indigo Weaver",
    price: "₹1200.00",
    image: "/images/story_featured/ing3.jpg",
},
{
    id: 3,
    category: "Pottery",
    title: "Handmade Ceramic Vase",
    brand: "ClayCraft Studio",
    price: "₹3400.00",
    image: "/images/story_featured/img17.jpg",
},
{
    id: 4,
    category: "Woodwork",
    title: "Handcrafted Wooden Board",
    brand: "Ancient Timber",
    price: "₹9500.00",
    image: "/images/story_featured/img7.jpg",
  },
];

const Storyfeature = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold">Featured Artisans</h2>
          <p className="text-gray-400 text-sm mt-2">
            Specially selected items from our most celebrated creators.
          </p>
        </div>

        <button className="text-blue-400 hover:underline flex items-center gap-2">
          View All Products →
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#111827] rounded-2xl overflow-hidden group hover:scale-105 transition duration-300"
          >
            
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.image}
                className="w-full h-56 object-cover"
              />

              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-pink-500 text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>

              {/* Wishlist Icon */}
              <div className="absolute top-3 right-3 bg-black/50 p-2 rounded-full">
                <Heart size={16} />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <p className="text-xs text-gray-400 uppercase">
                {item.brand}
              </p>

              <h3 className="font-semibold mt-1">
                {item.title}
              </h3>

              {/* Price + Button */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-400 font-semibold">
                  {item.price}
                </span>

                <button className="bg-black border border-gray-600 px-3 py-1 rounded-lg flex items-center gap-1 text-sm hover:bg-white hover:text-black transition">
                  <ShoppingCart size={14} />
                  Add
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Storyfeature;