import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { MdOutlinePlace } from "react-icons/md";

import classes from "./StoreCard.module.scss";
import { useContext } from "react";
import { StoreContext } from "../../contexts";

const StoreCard = (store) => {
  const { setStore } = useContext(StoreContext);
  const navigate = useNavigate();

  const { _id, name, storename, address, logo, coverPhoto } = store;
  const { neighborhood, city, state } = address;

  const handleOnClick = () => {
    setStore({
      _id,
      logo,
      name,
      storename,
    });

    navigate("/store");
  };

  return (
    <Card className={`${classes["card--store"]} grow`} onClick={handleOnClick}>
      <Card.Img variant="top" src={coverPhoto} />
      <Card.Body>
        <div className="d-flex align-items-center">
          <img
            className={`${classes["img--store-logo"]} me-4`}
            src={logo}
            alt="Store logo"
          />

          <div className="d-flex flex-column">
            <h5 className="mb-0">
              <strong>{name}</strong>
            </h5>

            <span className="text-muted mb-3">@{storename}</span>

            <div className="d-flex aligm-items-center text-muted">
              <MdOutlinePlace size={20} className="me-2" />
              <small>
                {neighborhood}, {city} - {state}
              </small>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreCard;
