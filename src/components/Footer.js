import { Row, Col, List } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="company-info">
        <div className="location">
          <h6>Location</h6>
          <p>
            Bronkhorststraat 30
            <br />
            2718 AT Den Haag, The Netherlands
          </p>
          <h6>Opening Hours</h6>
          <p>
            Monday - Saturday 10.00-18.00
            <br />
            Sunday 12.00-18.00
          </p>
        </div>
        <div className="contact">
          <div className="center">
            <h6>Contact us:</h6>
            <div>
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
          <div className="center">
            <h6>Follow us:</h6>
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
        <List type="unstyled" className="menu">
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
        </List>
      </div>

      <div className="credit">
        <p>2024 Simple Home. Site by Eunike Hedriani Pardede</p>
      </div>
    </footer>
  );
};

export default Footer;
