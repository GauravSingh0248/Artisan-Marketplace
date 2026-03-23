import { motion } from "framer-motion";

import dhoni from "../assets/images/team/Dhoni.jpeg";
import gaurav from "../assets/images/team/GauravSingh.jpg";
import samantha from "../assets/images/team/Samantha.webp";
import shirley from "../assets/images/team/shirleySetia.jpg";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-gray-500 mb-3">Our Mission</p>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Empowering the Human Touch in a Digital World.
          </h1>
          <p className="text-gray-600 mb-6">
            ArtisanMarketPlace was founded on a simple belief: that the
            world’s finest craftsmanship shouldn’t be hidden in small
            corners. We bring the beauty of handmade excellence to your
            doorstep.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-5 py-2 rounded-lg">
              Join Our Movement
            </button>
            <button className="text-gray-700 hover:underline">
              Read Our Stories →
            </button>
          </div>
        </div>

        <div>
          <img
            src="/images/img8.jpg"
            alt="craft"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="text-center py-16 px-6">
        <h2 className="text-2xl font-semibold mb-2">What We Stand For</h2>
        <p className="text-gray-500 mb-10">
          Our values guide every decision we make, from the artisans we
          partner with to the way we ship our products.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Unmatched Quality",
              desc: "Every piece undergoes rigorous quality checks ensuring time and effort in every stitch and curve.",
            },
            {
              title: "Community First",
              desc: "We ensure fair wages and sustainable growth for artisans across the globe.",
            },
            {
              title: "Sustainability",
              desc: "Eco-friendly packaging and natural materials that respect Earth’s cycles.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-gray-500 mb-3">Our Heritage</p>
          <h2 className="text-2xl font-semibold mb-4">
            From a Shared Studio to a Global Market
          </h2>
          <p className="text-gray-600 mb-4">
            ArtisanMarketPlace began in 2012 in a small ceramics studio in
            Portland. We saw talented makers struggling to find their
            audience.
          </p>
          <p className="text-gray-600 mb-6">
            Today, we support over 1,200 artisans from 45 different
            countries, ensuring traditions thrive globally.
          </p>

          <button className="border px-4 py-2 rounded-lg text-sm">
            Have Questions? Talk to Support
          </button>
        </div>

        <div className="flex gap-4">
          <img
            src="/images/img4.jpg"
            alt="craft"
            className="rounded-xl w-1/2"
          />
          <img
            src="/images/img2.jpg"
            alt="craft"
            className="rounded-xl w-1/2"
          />
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="text-center py-16 px-6">
        <p className="text-sm text-gray-500">Our People</p>
        <h2 className="text-2xl font-semibold mb-10">
          The Team Behind the Craft
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Gaurav Singh", role: "Founder & Curator", img: gaurav },
            { name: "Shriley Setia", role: "Head of Community", img: shirley },
            { name: "Samantha Ruth Prabhu", role: "Artisan Relations", img: samantha },
            { name: "Mahendra Singh Dhoni", role: "Sustainability Director", img: dhoni },
            ].map((person, i) => (
            <div key={i}>
              <img
                src={person.img}
                alt={person.name}
                className="w-42 h-42 mx-auto rounded-full mb-3 object-cover"
                />
              <h4 className="font-medium">{person.name}</h4>
              <p className="text-gray-500 text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="grid md:grid-cols-4 text-center py-12 border-t max-w-6xl mx-auto">
        {[
          ["1,200+", "ARTISANS"],
          ["45", "COUNTRIES"],
          ["20k+", "UNIQUE ITEMS"],
          ["100%", "HUMAN MADE"],
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold">{item[0]}</h3>
            <p className="text-gray-500 text-sm">{item[1]}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-black text-white rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Ready to support the artisan revolution?
            </h3>
            <p className="text-gray-300 text-sm">
              Whether you're a maker or a buyer, there's a place for you.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-lg">
              View Openings
            </button>
            <button className="border border-white px-4 py-2 rounded-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;