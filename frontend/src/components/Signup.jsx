import { FaGoogle, FaGithub, FaStar } from "react-icons/fa";
import potImg from "../assets/images/potss.jpg";
import heroImg from "../assets/images/shirley3.webp";

import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();
    return (
    <div className="min-h-screen flex">
      
      {/* LEFT SIDE */}
      <div className="w-full md:w-2/5 bg-white flex flex-col justify-center px-10 py-8">
        
        {/* Logo */}
        <h1
        className="text-xl font-bold text-violet-600 mb-6 hover:text-violet-500 hover:scale-105 transition cursor-pointer"
        onClick={() => navigate("/")}
        >
        Artisan Marketplace
        </h1>

        {/* Heading */}
        <p className="text-blue-500 mb-2 font-medium">Join the Guild</p>
        <h2 className="text-2xl font-bold mb-2">
          Create your maker account
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Start your journey as a recognized artisan and connect with collectors worldwide.
        </p>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg w-full hover:bg-gray-50">
            <FaGoogle /> Google
          </button>
          <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg w-full hover:bg-gray-50">
            <FaGithub /> GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-xs text-gray-400">
            OR CONTINUE WITH EMAIL
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2"
          />

          {/* Terms */}
          <div className="text-sm text-gray-500">
            <label className="flex items-start gap-2">
              <input type="checkbox" />
              <span>
                I agree to the{" "}
                <span className="text-blue-500 cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-blue-500 cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </label>
          </div>

          {/* Submit */}
          <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
            Create Account →
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-6">
          © 2026 Artisan Marketplace Inc. All rights reserved.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-3/5 relative h-screen">
        
        <img
          src={potImg}
          alt="artisan"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 p-10 text-white">

          {/* Top Nav */}
          <div className="flex justify-end gap-6 text-sm mb-10">
            <span className="cursor-pointer">How it Works</span>
            <span className="cursor-pointer">Our Makers</span>
            <span className="cursor-pointer text-blue-300 hover:underline" onClick={() => navigate("/login")}
            >
            Log In
            </span>
          </div>

          {/* Center Content */}
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold leading-tight">
              Where every stitch <br /> tells a{" "}
              <span className="text-blue-400">story.</span>
            </h1>

            <div className="flex gap-4 mt-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Curated Community
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                0% Listing Fees
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Global Shipping
              </span>
            </div>
          </div>

          {/* REVIEW BOX */}
          {/* <div className="absolute bottom-24 right-10 bg-white text-black p-5 rounded-2xl w-[420px] shadow-2xl"> */}
          <div className="absolute bottom-24 right-10 bg-white/70 backdrop-blur-md text-black p-5 rounded-2xl w-[420px] shadow-2xl border border-white/40">
            {/* Stars */}
            <div className="flex text-yellow-400 mb-2">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            {/* Text */}
            <p className="text-sm text-gray-600 leading-relaxed">
              "Joining Artisan Marketplace transformed my ceramics hobby into a thriving studio. The community support is as beautiful as the crafts we sell."
            </p>

            {/* User */}
            <div className="flex items-center gap-4 mt-4">
              <img
                src={heroImg}
                className="w-14 h-14 rounded-full"
                alt="user"
              />
              <div>
                <p className="text-base font-semibold">Shirely Setia</p>
                <p className="text-sm text-gray-500">
                  Master Ceramicist
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="absolute bottom-5 left-10 flex gap-10 text-sm">
            <div>
              <h3 className="text-xl font-bold">12k+</h3>
              <p>Active Artisans</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">850k</h3>
              <p>Handmade Goods</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">4.9★</h3>
              <p>Buyer Rating</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;