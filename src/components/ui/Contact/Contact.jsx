import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          We value your feedback and suggestions. If you have any questions or
          need assistance, our dedicated support team is here to help.
        </p>
        <ul>
          <li>Email: moviebox@info.com</li>
          <li>Phone: +1-123-456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
      {/* Background Image Attribution */}
      <div className="freepik">
        Image by{" "}
        <a
          target="_blank"
          href="https://www.freepik.com/free-vector/abstract-background-with-circles-dots_7065265.htm?query=vector%20bg#from_view=detail_alsolike"
        >
          Freepik
        </a>
      </div>
    </div>
  );
}
