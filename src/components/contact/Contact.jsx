import React from "react";
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component {
  render() {
    const element = (
      <div>
        <div className="contact-header"> Let's get in touch and work with Jessica Trinh...</div>
        <div className="contact-description">
          I would love to help create those special and natural images for your and your loved ones.
        </div>
        <div className="contact-description">
          Please call or send me an email and I will get back to you within 24 hours.
        </div>
        <div className="contact-phone-number">
          Phone number: <a className="contact-link" href="tel:+16033610091">(603)-361-0091</a>
        </div>
        <div className="contact-email-address">
          Email address: <a className="contact-link" href="mailto: never2manyearrings@yahoo.com">never2manyearrings@yahoo.com</a>
        </div>
        {/*<SocialIcon className="contact-icon" url="http://twitter.com/" />*/}
        <SocialIcon className="contact-icon" url="http://facebook.com/" />
        <SocialIcon className="contact-icon" url="http://instagram.com/" />
      </div>
    );
    return element;
}
}

export default Contact;