import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLocationArrow,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import classes from "./Footer.module.css";
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container flex ${classes["footer-con"]}`}>
        <div className={classes["footer-logo"]}>
          <img src={footerLogo} />
        </div>
        <div>
          <p className={classes.title}>sitemap</p>
          <ul className={classes[`footer-link`]}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/menu">menu</Link>
            </li>
            <li>
              <Link to="/reservations">reservations</Link>
            </li>
            <li>
              <Link to="/orderonline">order online</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className={classes.title}>contact with us</p>
          <ul className={classes["contact-info"]}>
            <li>
              <p className={classes.location}>
                <FaLocationArrow /> 678 Pisa Ava, Chicago, IL 60611
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
