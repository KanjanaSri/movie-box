import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full h-auto px-10 flex flex-col sm:flex-row gap-6 justify-between items-center py-4 bg-zinc-900">
      <div className="w-16">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <p className="text-xs sm:text-base">&copy; 2023 DigitalKarnjana, LLC.</p>

      <div className="flex justify-center items-center text-xl gap-3">
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
        <span>
          <i className="fa-brands fa-twitter"></i>
        </span>
        <span>
          <i className="fa-brands fa-facebook"></i>
        </span>
        <span>
          <i className="fa-brands fa-tiktok"></i>
        </span>
        <span>
          <i className="fa-brands fa-youtube"></i>
        </span>
      </div>
    </footer>
  );
}
