import { FaTwitter, FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 px-6 py-10 text-sm text-gray-600">
      
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <h1 className="text-xl font-medium italic text-black">Artisan Marketplace</h1>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
          <span>For designers</span>
          <span>Hire talent</span>
          <span>Inspiration</span>
          <span>Advertising</span>
          <span>Blog</span>
          <span>About</span>
          <span>Careers</span>
          <span>Support</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-700 text-lg">
          <FaTwitter className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaPinterestP className="cursor-pointer" />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
        
        <div>
          © 2026 ArtisansMarketplace &nbsp; | &nbsp; Terms &nbsp; Privacy &nbsp; Cookies
        </div>

        <div className="flex gap-4">
          <span>Jobs</span>
          <span>Designers</span>
          <span>Freelancers</span>
          <span>Tags</span>
          <span>Places</span>
          <span>Resources</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;