import React from "react";
import style from "./Footer.module.css";
import youTube from "../../assets/youTube.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import LinkedIn from "../../assets/LinkedIn.png";

const Footer = () => {
  return (
    <div className={style.endDiv}>
      <div className={style.Semicircle}>
        <div className={style.h3pFooter}>
          <h3>THE BEST OF HandiHup DELIVERED TO YOUR INBOX</h3>
          <p>
            Sign up for more inspiring photos, stories, and special offers from
            HandiHup.
          </p>
        </div>

        <div className={style.accounts}>
          <p>info@mysite.com</p>
          <ul>
            <li>
              <a href="http://www.youtube.com/@marwababelly8333">
                <img src={youTube} alt="youTube" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/marwa.babelly.18">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/marwababelly/">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/marwababelly/">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
