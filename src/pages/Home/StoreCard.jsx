import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { MdOutlinePlace } from "react-icons/md";

import storeLogo from "../../assets/store-logo.png";
import storeCoverPhoto from "../../assets/cover-photo.jpg";

import classes from "./StoreCard.module.scss";

const StoreCard = ({ name, storename, address }) => {
  const { neighborhood, city, state } = address;

  return (
    <Card className={`${classes["card--store"]} grow`}>
      <Link to="/store">
        <Card.Img variant="top" src={storeCoverPhoto} />
        <Card.Body>
          <div className="d-flex align-items-center">
            <img
              className={`${classes["img--store-logo"]} me-4`}
              src={storeLogo}
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
      </Link>
    </Card>
  );
};

export default StoreCard;
