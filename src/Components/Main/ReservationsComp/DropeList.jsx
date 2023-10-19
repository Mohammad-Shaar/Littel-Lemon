import classes from "./DropeList.module.css";

const DropeList = ({ title }) => {
  let gridOneColum;

  const clickHandler = (e) => {
    console.log(e.target.textContent);
  };

  let fields = [];

  if (title === "Diners") {
    fields.push(`1 Diner`);
    for (let i = 1; i < 10; i++) {
      fields.push(`${i + 1} ${title}`);
    }
  } else if (title === "pm") {
    for (let i = 5; i <= 10; i++) {
      fields.push(`${i}:00 ${title}`);
    }
  } else {
    gridOneColum = classes["one-colum"];
    fields = ["Birthday", "Engagement", "Anniversary"];
  }

  return (
    <div id="dlist" className={`grid ${classes["drop-list"]} ${gridOneColum}`}>
      {fields.map((field, index) => (
        <p
          onClick={(e) => clickHandler(e)}
          className={classes.field}
          key={index}
        >
          {field}
        </p>
      ))}
    </div>
  );
};

export default DropeList;
