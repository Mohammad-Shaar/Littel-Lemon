import { FaTriangleExclamation } from "react-icons/fa6";
import classes from "./ErrorPageContent.module.css";

const PageContent = ({ title, children }) => {
  return (
    <div className={classes.content}>
      <FaTriangleExclamation />
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
