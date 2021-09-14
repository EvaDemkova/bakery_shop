import React from 'react';
import './style.css';

const ContactUs = () => {
  return (
    <div className="contact-us item-10">
      <h3>Contact us</h3>
      <div className="contact-icons">
        <div>
          <img src="/img/icons/instagram.svg" alt="" width="40" height="40" />
          <div>
            <a href="https://www.instagram.com/evel.d/">@urbanbakery</a>
          </div>
        </div>
        <div>
          <img src="/img/icons/email.svg" alt="" width="40" height="40" />
          <div> info@urbanbakery.com</div>
        </div>
        <div>
          <img src="/img/icons/phone-call.svg" alt="" width="40" height="40" />
          <div>+420 720 967 057</div>
        </div>
        <div>
          <img src="/img/icons/pin.svg" alt="" width="40" height="40" />
          <div>
            <div>Dolní 1478/8</div>
            <div>Prague 4</div>
            <div>Czech Republic</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
