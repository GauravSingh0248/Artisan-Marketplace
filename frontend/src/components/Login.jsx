import heroImg from "../assets/images/img1.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      
      {/* LEFT SIDE */}
      <div
        className="hidden lg:flex flex-1 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-12 text-white">
          
          {/* Brand */}
          <div className="flex items-center gap-2 text-green-400 font-semibold mb-6">
          
          <div className="w-5 h-5 border-2 border-green-400 rounded-full"></div>

          <span
            className="cursor-pointer transition-all duration-300 hover:text-green-300 hover:tracking-wide hover:-translate-y-0.5"
            onClick={() => navigate("/")}
          >
            Artisan Marketplace
          </span>

        </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight">
            Where <br />
            <span className="text-green-400">Craftsmanship</span> <br />
            Meets Community.
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-md text-gray-300">
            Join 50,000+ independent creators selling unique,
            handmade treasures to the world.
          </p>

          {/* Features */}
          <div className="flex gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
              <h4 className="font-semibold">Curated Collections</h4>
              <p className="text-sm text-gray-300">
                Expertly vetted artisans ensuring quality.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
              <h4 className="font-semibold">Fair Trade</h4>
              <p className="text-sm text-gray-300">
                More profit directly to creators.
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-10 bg-white text-black p-4 rounded-xl max-w-sm">
            <p className="text-sm">
              "Artisan has completely transformed how I connect with collectors."
            </p>
            <span className="text-xs text-gray-600">
              - Anuhska Sharma
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md">
          
          {/* Badge */}
          <span className="inline-block bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full mb-3">
            Creator Login
          </span>

          {/* Heading */}
          <h2 className="text-2xl font-bold">Welcome back, Maker</h2>
          <p className="text-gray-500 mb-6">
            Sign in to manage your workshop.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4">
            
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="name@workshop.com"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="•••••••••••"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Options */}
            <div className="flex justify-between text-sm text-gray-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Keep me logged in
              </label>
              <span className="text-green-500 cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition">
              Log In to Workshop →
            </button>

            {/* Divider */}
            <div className="text-center text-gray-400 text-sm my-2">
              OR CONTINUE WITH
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              <button className="flex-1 border py-2 rounded-lg hover:bg-gray-100">
                Google
              </button>
              <button className="flex-1 border py-2 rounded-lg hover:bg-gray-100">
                GitHub
              </button>
            </div>

            {/* Signup */}
            <p className="text-sm text-gray-500 text-center mt-3">
              New here?{" "}
              <span className="text-green-500 cursor-pointer">
                Apply as an Artisan
              </span>
            </p>
            <p className="text-sm text-gray-500 text-center mt-3">
              or?{" "}
              <span className="text-green-500 cursor-pointer " onClick={() => navigate("/signup")}>
                Signup
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}