import Brand from "./Brand";
import classes from "./SubHeader.module.scss";

const SubHeader = () => {
  return (
    <div className={`${classes["sub-header"]} d-flex align-items-center justify-content-center`}>
      <Brand />
    </div>
  );
};

export default SubHeader;
