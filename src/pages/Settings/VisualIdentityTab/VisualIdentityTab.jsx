import StoreCoverPhoto from "./StoreCoverPhoto";
import StoreLogo from "./StoreLogo";

const VisualIdentityTab = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <StoreLogo />
      </div>
      <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <StoreCoverPhoto />
      </div>
    </div>
  );
};

export default VisualIdentityTab;
