import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // 🔥 replace this

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ " + data.message);
      }
    } catch (error) {
      setResult("❌ Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {result && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {result}
          </p>
        )}
      </div>

    </div>
  );
}

export default Contact;