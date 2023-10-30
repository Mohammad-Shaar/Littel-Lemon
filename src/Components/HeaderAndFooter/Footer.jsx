import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import classes from "./Footer.module.css";
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container flex ${classes["footer-con"]}`}>
        <div className={classes["footer-logo"]}>
          <img src={footerLogo} loading="lazy" />
        </div>
        <div>
          <p className={classes.title}>sitemap</p>
          <ul className={classes[`footer-link`]}>
            <li>
              <Link to="/Littel-Lemon/">home</Link>
            </li>
            <li>
              <Link to="/Littel-Lemon/menu">menu</Link>
            </li>
            <li>
              <Link to="/Littel-Lemon/reservations">reservations</Link>
            </li>
            <li>
              <Link to="/Littel-Lemon/about">about</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={classes.title}>contact with us</p>
          <ul className={classes["contact-info"]}>
            <li>
              <p className={classes.location}>
                <FaLocationDot /> 678 Pisa Ava, Chicago, IL 60611
              </p>
            </li>
            <li>
              <p>
                <FaPhoneAlt /> (312) 593-2744
              </p>
            </li>
            <li>
              <p>
                <FaEnvelope />
                customer@littelemon.com
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p className={classes.title}>follow us</p>
          <ul className={classes["social-link"]}>
            <li>
              <Link to="https://www.facebook.com/" target="blank">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com/" target="blank">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/" target="blank">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/" target="blank">
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
