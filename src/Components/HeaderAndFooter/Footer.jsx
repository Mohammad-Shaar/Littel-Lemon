import classes from "./Footer.module.css";
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes["footer-logo"]}>
          <img src={footerLogo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
