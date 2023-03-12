import Button from "react-bootstrap/Button";

import VisualIdentityTab from "../Settings/VisualIdentityTab/VisualIdentityTab";

const VisualIdentityStep = ({ defaultValues, setDefaultValues, dispatch }) => {
  const { storeLogo, coverPhoto } = defaultValues;

  const setStoreLogoImage = (img) => {
    setDefaultValues((prevState) => ({
      ...prevState,
      storeLogo: img,
    }));
  };

  const setStoreCoverPhoto = (img) => {
    setDefaultValues((prevState) => ({
      ...prevState,
      coverPhoto: img,
    }));
  };

  const handleBackward = () => {
    dispatch({ type: "backward" });
  };

  const handleForward = () => {
    dispatch({ type: "forward" });
  };

  return (
    <div className="py-5">
      <VisualIdentityTab
        storeLogo={storeLogo}
        setStoreLogo={setStoreLogoImage}
        coverPhoto={coverPhoto}
        setStoreCoverPhoto={setStoreCoverPhoto}
      />

      <div className="d-flex justify-content-end mt-5">
        <div className="me-3">
          <Button className="px-5" variant="light" onClick={handleBackward}>
            Voltar
          </Button>
        </div>
        <Button className="px-5" variant="primary" onClick={handleForward}>
          Avançar
        </Button>
      </div>
    </div>
  );
};

export default VisualIdentityStep;
