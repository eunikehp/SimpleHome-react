import SubHeader from "../components/SubHeader";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="page-container">
      <SubHeader current="Contact" />

      <div className="column-center">
        <h3 className="heading-tertiary">Contact us</h3>
      </div>
      <div className="column-center">
        <div className="contact-text">
          <div>
            <a
              role="button"
              className="btn btn-link btn-sm"
              href="tel:+31120334445"
            >
              <i className="fa fa-phone" /> (+31) 120 334 445
            </a>{" "}
            /
            <a
              role="button"
              className="btn btn-link btn-sm"
              href="mailto:hello@simplehome.nl"
            >
              <i className="fa fa-envelope-o" />
              hello@simplehome.nl
            </a>
          </div>
          <p>
            or use the contact form below and we'll try to reply you as soon as
            possible.
          </p>
          <div className="comment-box">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
