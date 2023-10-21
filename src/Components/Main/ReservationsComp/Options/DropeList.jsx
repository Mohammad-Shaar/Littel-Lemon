import classes from "./DropeList.module.css";

const DropeList = (props) => {
  let gridOneColum = classes["two-colum"];
  const { title } = props;
  let minOption = Number(props.minOption);
  let maxOption = Number(props.maxOption);
  const occasions = props.occasions;

  const clickHandler = (e) => {
    console.log(e.target.textContent);
  };

  let fields = [];

  if (title === "Diners") {
    if (minOption === 1) {
      fields.push(`1 Diner`);
      minOption++;
    }
    for (let i = minOption; i <= maxOption; i++) {
      fields.push(`${i} ${title}`);
    }
  } else if (title === "pm") {
    for (let i = minOption; i <= maxOption; i++) {
      fields.push(`${i}:00 ${title}`);
    }
  } else {
    gridOneColum = classes["one-colum"];
    fields = occasions;
  }

  return (
    <div className={`grid ${classes["drop-list"]} ${gridOneColum}`}>
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
