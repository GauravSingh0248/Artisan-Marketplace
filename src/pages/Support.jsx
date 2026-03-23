import { useState } from "react";

const faqs = [
  {
    q: "How do I track my artisan order?",
    a: "Once your order is shipped, you will receive an email with a tracking number. You can also track your order in your dashboard under 'Order History'.",
  },
  {
    q: "What is your return policy for handmade items?",
    a: "We offer a flexible return window. Please check product-specific return policies before purchasing.",
  },
  {
    q: "Can I request a custom commission from an artisan?",
    a: "Yes! Many artisans accept custom orders. Use the 'Contact Artisan' option on product pages.",
  },
  {
    q: "How do you ensure the quality of products?",
    a: "Each product goes through strict quality checks before being listed and shipped.",
  },
  {
    q: "I'm an artisan—how can I sell on your platform?",
    a: "You can apply through our 'Join as Artisan' page and start showcasing your work globally.",
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="text-center py-16 px-6 max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">Support Center</p>
        <h1 className="text-3xl font-bold mb-4">
          We’re here to help you flourish.
        </h1>
        <p className="text-gray-500">
          Whether you're an artisan or a customer, our team is ready to assist you every step of the way.
        </p>
      </section>

      {/* TOP CARDS */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mb-16">
        {[
          {
            title: "Order Tracking",
            desc: "Check real-time status of your artisan shipment.",
          },
          {
            title: "Returns & Refunds",
            desc: "Learn about our flexible return policies.",
          },
          {
            title: "Artisan Support",
            desc: "Resources for sellers including shipping and store management.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
          >
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
            <p className="text-sm mt-2 text-black font-medium cursor-pointer">
              Learn more →
            </p>
          </div>
        ))}
      </section>

      {/* FAQ + FORM */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mb-6">
            Browse common queries for quick answers.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{faq.q}</h4>
                  <span>{openIndex === i ? "-" : "+"}</span>
                </div>

                {openIndex === i && (
                  <p className="text-sm text-gray-500 mt-2">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CONTACT CARDS */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border p-4 rounded-lg text-center">
              <p className="font-medium">Email Us</p>
              <p className="text-sm text-gray-500">
                support@artisan.com
              </p>
            </div>
            <div className="border p-4 rounded-lg text-center">
              <p className="font-medium">Call Us</p>
              <p className="text-sm text-gray-500">
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-semibold mb-4">Submit a Request</h3>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="First Name"
                className="border p-2 rounded"
              />
              <input
                placeholder="Last Name"
                className="border p-2 rounded"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
            />

            <input
              placeholder="Subject"
              className="w-full border p-2 rounded"
            />

            <textarea
              rows={4}
              placeholder="Message"
              className="w-full border p-2 rounded"
            />

            <button className="w-full bg-black text-white py-2 rounded">
              Send Message
            </button>
          </form>

          {/* OFFICE HOURS */}
          <div className="mt-6 text-sm text-gray-500">
            <p className="font-medium text-black mb-2">Office Hours</p>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-red-500">Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="text-center py-16 px-6">
        <h2 className="text-xl font-semibold mb-2">
          Global Presence, Local Support
        </h2>
        <p className="text-gray-500 mb-6">
          Our support hubs ensure help wherever you are.
        </p>

        <div className="bg-white border rounded-xl h-64 flex items-center justify-center text-gray-400">
          i will add map , later --- :
        </div>
      </section>

    </div>
  );
};

export default Support;