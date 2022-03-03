import { IoRestaurantOutline } from "react-icons/io5";
import { BiImage } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";
import Button from "react-bootstrap/Button";
import classes from "./DataConfirmationStep.module.scss";

const DataConfirmationStep = ({
  storeInfo,
  address,
  visualIdentity,
  dispatch,
}) => {
  const { name, storename } = storeInfo;
  const { zipCode, street, number, complement, neighborhood, city, state } =
    address;
  const { storeLogo, coverPhoto } = visualIdentity;

  return (
    <div className="py-5">
      <div className="d-flex justify-content-center">
        <div className={classes["container--store"]}>
          <div className={classes["container--cover-photo"]}>
            {coverPhoto ? (
              <img
                className={classes["img--cover-photo"]}
                src={coverPhoto}
                alt="Cover"
              />
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100">
                <BiImage size={80} className="text-muted" />
              </div>
            )}
          </div>

          <div
            className={`${classes["container--store-data"]} d-flex justify-content-center align-items-end`}
          >
            <div className={`${classes["container--store-logo"]}`}>
              {storeLogo ? (
                <img
                  className={classes["img--store-logo"]}
                  src={storeLogo}
                  alt="Logo"
                />
              ) : (
                <div className="d-flex justify-content-center align-items-center h-100">
                  <IoRestaurantOutline size={50} className="text-muted" />
                </div>
              )}
            </div>
            <div className="ms-3 pb-3">
              <h4 className="mb-2">
                <strong>{name}</strong>
              </h4>

              <div className="mb-2">
                <span className="text-muted mb-2">
                  <em>@{storename}</em>
                </span>
              </div>

              <div className="d-flex aling-items-center">
                <div className="d-flex justify-content-center align-items-center me-2">
                  <MdOutlinePlace size={30} />
                </div>
                <div className="d-flex flex-column">
                  <small>
                    {street}, {number}, {complement && `${complement}, `}
                    {neighborhood}
                  </small>
                  <small>
                    {city} - {state} - CEP: {zipCode}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-5">
        <div className="me-3">
          <Button
            className="px-5"
            variant="light"
            onClick={() => dispatch({ type: "backward" })}
          >
            Voltar
          </Button>
        </div>
        <Button
          className="px-5"
          variant="primary"
          onClick={() => dispatch({ type: "forward" })}
        >
          Criar estabelecimento
        </Button>
      </div>
    </div>
  );
};

export default DataConfirmationStep;
