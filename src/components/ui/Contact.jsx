import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-neutral-800">
      <div className="w-3/4 md:w-2/4 text-xs sm:text-sm md:text-lg">
        <h1 className="font-[Roboto] tracking-wider font-bold text-xl md:text-4xl my-3.5 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-rose-400">
          Contact Us
        </h1>
        <p className="leading-relaxed my-8">
          We value your feedback and suggestions. If you have any questions or
          need assistance, our dedicated support team is here to help.
        </p>
        <ul>
          <li>Email: moviebox@info.com</li>
          <li>Phone: +1-123-456-7890</li>
          <li>Address: 123 Main Street, NY, USA</li>
        </ul>
      </div>
    </div>
  );
}
