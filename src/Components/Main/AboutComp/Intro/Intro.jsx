import classes from "./Intro.module.css";
import introImg from "../../../../assets/about.jpg";

const Intro = () => {
  return (
    <section className={classes.intro}>
      <div className={`container flex ${classes["intro-con"]}`}>
        <div className={classes["intro-text"]}>
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint totam
            dolore asperiores distinctio? Libero excepturi incidunt et
            consequuntur dolor quas, alias perspiciatis neque officiis cumque
            non ducimus quis repudiandae? Corrupti.
          </p>
        </div>
        <img src={introImg} />
        <div className={classes.overlay}></div>
      </div>
    </section>
  );
};

export default Intro;
