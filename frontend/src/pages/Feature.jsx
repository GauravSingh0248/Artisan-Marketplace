import { ShieldCheck, Truck, Leaf } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Certified Quality",
    desc: "Every piece is vetted for authenticity, craftsmanship, and material durability by our expert team.",
  },
  {
    icon: <Truck size={28} />,
    title: "Global Shipping",
    desc: "Seamless delivery from local workshops to your doorstep, anywhere in the world, with real-time tracking.",
  },
  {
    icon: <Leaf size={28} />,
    title: "Sustainable Impact",
    desc: "We prioritize ethical sourcing and eco-friendly packaging, ensuring your purchase supports a healthier planet.",
  },
];

const Features = () => {
  return (
    <div className="bg-black py-16 px-6">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-gray-700 rounded-2xl p-8 text-center text-white hover:scale-105 transition duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-blue-600 mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Features;