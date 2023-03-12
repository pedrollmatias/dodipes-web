import classes from "./Content.module.scss";

const Content = ({ children }) => {
  return (
    <div className={`${classes.content} flex-grow-1 overflow-auto`}>
      {children}
    </div>
  );
};

export default Content;
