import classes from "./DropeDown.module.css";

const DropeDown = (props) => {
  return <button className={`flex ${classes.drope}`}>{props.children}</button>;
};

export default DropeDown;
