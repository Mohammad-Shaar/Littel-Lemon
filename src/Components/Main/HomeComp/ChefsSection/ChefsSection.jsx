import classes from "./ChefsSection.module.css";
import chefs1 from "../../../../assets/chefs1.jpg";
import chefs2 from "../../../../assets/chefs2.jpg";

const ChefsSection = () => {
  return (
    <section className={classes["chef-sec"]}>
      <div className="container">
        <div className={classes["chef-text"]}>
          <h1>little lemon</h1>
          <h2>chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            vitae minus debitis, voluptate, est illum odio veniam magni
            temporibus, laudantium accusantium mollitia nesciunt ea tenetur? Ex
            hic expedita assumenda rerum. Magnam id aut repudiandae, sequi enim
            porro, non sint fugit ad suscipit obcaecati aliquid animi
            laudantium, cum dolor iusto ratione omnis. Quod quas soluta, commodi
            laborum sed atque est consequatur. Illum laboriosam consectetur
            excepturi! Rem, exercitationem enim sequi cumque amet, veniam,
            voluptatibus sapiente facilis eos soluta nulla odit asperiores
            blanditiis in. Tempore, dignissimos ipsam. Vero animi dolor vitae id
            mollitia.
          </p>
        </div>
        <div className={classes["chef-img"]}>
          <div>
            <img src={chefs1} />
          </div>
          <div>
            <img src={chefs2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
