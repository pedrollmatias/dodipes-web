import StoreCoverPhoto from "./StoreCoverPhoto";
import StoreLogo from "./StoreLogo";

const VisualIdentityTab = ({
  storeLogo,
  coverPhoto,
  setStoreLogo,
  setStoreCoverPhoto,
}) => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <StoreLogo image={storeLogo} setImage={setStoreLogo} />
      </div>
      <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <StoreCoverPhoto image={coverPhoto} setImage={setStoreCoverPhoto} />
      </div>
    </div>
  );
};

export default VisualIdentityTab;
