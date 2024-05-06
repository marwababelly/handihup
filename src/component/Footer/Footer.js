import React, { useRef, useState } from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import youTube from "../../assets/youTube.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/Twitter.png";
import LinkedIn from "../../assets/LinkedIn.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef("");
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
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
            <Link>
              <img src={youTube} alt="youTube" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebook} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitter} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={instagram} alt="instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={LinkedIn} alt="LinkedIn" />
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className={style.endDiv}>
          <div className={style.Semicircle}></div>
          <p className={style.endP}>Stay informed, join our newsletter</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-center">
                Enter your email here *
              </Form.Label>
              <Form.Control
                className={style.customInput}
                type="email"
                ref={emailRef}
                value={email}
                onChange={emailHandler}
                required
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Footer;
