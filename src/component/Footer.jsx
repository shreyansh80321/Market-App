import React from 'react'
import { footerStyles } from '../assets/dummyStyles'
import { FaApplePay, FaCcAmex, FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebookF, FaInstagram, FaLink, FaMapMarkedAlt, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import {BsTelephone} from 'react-icons/bs'
import { FiBookmark, FiMail } from 'react-icons/fi';
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
   const socialLinks = [
     {
       icon: FaFacebookF,
       url: "https://www.facebook.com/",
     },
     {
       icon: FaTwitter,
       url: "https://twitter.com/",
     },
     {
       icon: FaInstagram,
       url: "https://www.instagram.com/",
     },
     {
       icon: FaYoutube,
       url: "https://www.youtube.com/",
     },
   ];
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.topBorder} />
      <div
        className={`${footerStyles.floatingShape} -top-24 -right-24 w-80 h-80 opacity-20`}
      ></div>
      <div
        className={`${footerStyles.floatingShape} -bottom-40 -left-24 w-96 h-96 opacity-15 animation-delay-2000`}
      ></div>
      <div
        className={`${footerStyles.floatingShape}top-1/4 left-1/3 w-64 h-64 bg-emerald-600 opacity-10 animate-pulse`}
      ></div>
      <div className={footerStyles.container}>
        <div className={footerStyles.grid}>
          <div>
            <h2 className={footerStyles.brandTitle}>
              GROCCERY<span className={footerStyles.brandSpan}>BASKET</span>
            </h2>
            <p className={footerStyles.brandText}>
              Coming to you with the Freshesht Products sicnce 2020. Our aim is
              to deliver the items as fresh as possible to your doorsteps.
            </p>
            <div className="space-x-3 flex">
              {socialLinks.map((social, idx) => (
                <a
                  href={social.url}
                  key={idx}
                  target="_blank"
                  aria-label={`Visit Our ${social.icon.name.replace(
                    "Fa",
                    ""
                  )}page`}
                  className={footerStyles.socialLink}
                >
                  <social.icon
                    className={footerStyles.socialIcon}
                  ></social.icon>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className={footerStyles.sectionTitle}>
              <FaLink className={footerStyles.sectionIcon} />
              Quick Links
            </h3>
            <ul className={footerStyles.linkList}>
              {["Home", "Items", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item==='Home'?'/':`/${item.toLowerCase()}`}
                    className={footerStyles.linkItem}
                  >
                    <span className={footerStyles.linkBullet}></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={footerStyles.sectionTitle}>
              <BsTelephone className={footerStyles.sectionIcon} />
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <FaMapMarkedAlt className={footerStyles.contactIcon} />
                </div>
                <div>
                  <p>123 Organic Range, Green and Clean, GC 54562</p>
                </div>
              </li>
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <FaPhone className={footerStyles.contactIcon} />
                </div>
                <div>
                  <p>+91-7905448686</p>
                </div>
              </li>
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <FaPhone className={footerStyles.contactIcon} />
                </div>
                <div>
                  <p>sibersuper1122@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={footerStyles.sectionTitle}>
              <FiMail className={footerStyles.sectionIcon} />
              NewsLetter
            </h3>
            <p className={footerStyles.newsletterText}>
              Visit to our newspaper to get the full updates and exclusisve
              offers
            </p>
            <div className={footerStyles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter Email Address here"
                className={footerStyles.newsletterInput}
              />
              <button className={footerStyles.newsletterButton}>
                <BiMailSend className="mr-2 text-lg" />
                <span>GetUpdates</span>
              </button>
            </div>
            <p className={footerStyles.privacyText}>We Respect Your Privacy</p>
          </div>
        </div>
        <div className={footerStyles.paymentSection}>
          <h4 className={footerStyles.paymentTitle}>
            <FiBookmark className={footerStyles.paymentIcon} />
            We Accept all Payment Platform
          </h4>
          <div className={footerStyles.paymentMethods}>
            {[FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaApplePay].map((Icon, idx) => (
              <div key={idx} className={footerStyles.paymentItem}>
                <Icon className={ footerStyles.paymentIcon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer