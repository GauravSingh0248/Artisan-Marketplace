import { useState } from "react";

import harry from "../assets/images/Gallery/team/HarryBrook.png";
import emma from "../assets/images/Gallery/team/EmmaWatson.jpg";
import gaurav from "../assets/images/Gallery/team/Gaurav Singh.jpeg";
import shirley from "../assets/images/Gallery/team/shirleySetia.jpg";

import hero from "../assets/images/Gallery/hero.jpg";


const categories = [
  "All Pieces",
  "Ceramics",
  "Woodworking",
  "Textiles",
  "Jewelry",
  "Glassware",
  "Metalwork",
];

const images = [
  { src: "/images/img1.jpg", className: "row-span-2" },
  { src: "/images/img2.jpg", className: "row-span-3" },
  { src: "/images/img4.jpg" },
  { src: "/images/img10.jpg", className: "row-span-2" },
  { src: "/images/img5.jpg" },
  { src: "/images/img6.jpg", className: "row-span-2" },
  { src: "/images/img12.jpg" },
  { src: "/images/img8.jpg", className: "row-span-2" },
];

const Gallery = () => {
  const [active, setActive] = useState("All Pieces");

  return (
    <div className="bg-gray-50 text-gray-800 pt-16">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <img
          src={hero}
          className="absolute inset-0 w-full h-full object-cover"
          alt="hero"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-2xl">
          <p className="text-sm mb-2">Curated Exhibition</p>
          <h1 className="text-4xl font-bold mb-3">
            The Soul of the Handmade
          </h1>
          <p className="text-sm mb-6">
            Explore a world of masterfully crafted pieces where every
            brushstroke tells a story.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 px-5 py-2 rounded-lg">
              Explore Collection
            </button>
            <button className="border px-5 py-2 rounded-lg">
              Meet the Makers
            </button>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Curation Gallery</h2>

        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1 rounded-full text-sm ${
                active === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl ${img.className}`}
            >
              <img
                src={img.src}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                alt="gallery"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="border px-5 py-2 rounded-lg">
            Load More Pieces →
          </button>
        </div>
      </section>

      {/* ARTISTS */}
      <section className="bg-orange-50 py-14 px-6 text-center">
        <h2 className="text-xl font-semibold mb-2">
          Meet the Hands Behind the Art
        </h2>
        <p className="text-gray-500 mb-8">
          Every piece is crafted by passionate artisans.
        </p>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { name: "Harry Brook", place: "Kolkata", img: harry },
          { name: "Emma Watson", place: "Oregon", img: emma },
          { name: "Gaurav Singh", place: "London", img: gaurav },
          { name: "Shirley Setia", place: "New Zealand", img: shirley },
        ].map((artist, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
            <img
              src={artist.img}
              className="w-46 h-46 rounded-full mx-auto mb-3 object-cover"
              alt={artist.name}
            />
            <h4 className="font-medium">{artist.name}</h4>
            <p className="text-sm text-gray-500">{artist.place}</p>
            <button className="text-sm mt-2 text-orange-500">
              View Workshop →
            </button>
          </div>
        ))}
      </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Join Our Artisan Collective
          </h3>
          <p className="text-gray-500 mb-4">
            Get monthly stories and exclusive access to artisan works.
          </p>

          <div className="flex gap-3">
            <input
              placeholder="Enter your email"
              className="border px-3 py-2 rounded w-full"
            />
            <button className="bg-orange-500 text-white px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>

        <img
          src="/images/img2.jpg"
          className="rounded-xl shadow"
          alt="cta"
        />
      </section>

    </div>
  );
};

export default Gallery;