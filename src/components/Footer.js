import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="company-info">
        <div className="location">
          <span className='subheading'>Location</span>
          <p>
            Bronkhorststraat 30
            <br />
            2718 AT Den Haag, The Netherlands
          </p>
          <span className='subheading'>Opening Hours</span>
          <p>
            Monday - Saturday 10.00-18.00
            <br />
            Sunday 12.00-18.00
          </p>
        </div>
        <ul className="footer-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <div className="contact">
          <div className="column">
            <span className='subheading' >Contact us:</span>
            <div className="column-link">
              <a
                role="button"
                className="btn btn-link btn-sm"
                href="tel:+31120334445"
              >
                <i className="fa fa-phone" /> (+31) 120 334 445
              </a>
              <a
                role="button"
                className="btn btn-link btn-sm"
                href="mailto:hello@simplehome.nl"
              >
                <i className="fa fa-envelope-o" /> hello@simplehome.nl
              </a>
            </div>
          </div>
          <div className="column">
            <span className='subheading'>Follow us:</span>
            <div className="grid-col-4">
              <a href="http://instagram.com/" className="social">
                <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" />
              </a>
              <a href="http://facebook.com/" className="social">
                <FontAwesomeIcon icon="fa-brands fa-facebook" size="2x" />
              </a>
              <a href="http://twitter.com/" className="social">
                <FontAwesomeIcon icon="fa-brands fa-twitter" size="2x" />
              </a>
              <a href="http://youtube.com/" className="social">
                <FontAwesomeIcon icon="fa-brands fa-youtube" size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="credit">
        <p>2024 Simple Home. Site by Eunike Hedriani Pardede</p>
      </div>
    </div>
  );
};

export default Footer;
