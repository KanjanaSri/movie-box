import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <p className="copy">&copy; 2023 DigitalKarnjana, LLC.</p>

      <div className="social">
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
