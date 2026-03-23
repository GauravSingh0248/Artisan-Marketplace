import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Features from "./pages/Feature";
import Storyfeature from "./pages/Storyfeature";
import ArtisanStory from "./pages/ArtisanStory";
import LoopingImages from "./pages/LoopingImages";

import Login from "./components/Login";
import Signup from "./components/Signup";

import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Career from "./pages/Career";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function AppContent() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Dashboard />
                <Features />
                <Storyfeature />
                <LoopingImages />
                <ArtisanStory />
              </>
            }
          />

          {/* Login */}
          <Route path="/login" element={<Login />} />
          {/* Signup */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
