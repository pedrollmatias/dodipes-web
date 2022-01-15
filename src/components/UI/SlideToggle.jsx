import classes from "./SlideToggle.module.scss";

const SlideToggle = ({ checked = false, label }) => {
  return (
    <>
      <label className={classes.switch}>
        <input type="checkbox"/>
        <span className={`${classes.slider}`}></span>
      </label>
      {label && <span className="ms-2">{label}</span>}
    </>
  );
};

export default SlideToggle;
