import { FiEdit, FiTrash2 } from "react-icons/fi";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import itemImg from "../../assets/file-fritas.jpg";

import { numberToCurrency } from "../../lib/currency";

import SlideToggle from "../../components/UI/SlideToggle";
import IconButton from "../../components/UI/IconButton";

import classes from "./CategoryItemCard.module.scss";

const ItemImg = () => {
  return (
    <img className={`${classes["img--item"]} me-3`} alt="Prato" src={itemImg} />
  );
};

const ItemInfo = ({ name, description }) => {
  return (
    <div className="d-flex flex-column">
      <span className="mb-3">
        <strong>{name}</strong>
      </span>

      <p>{description}</p>
    </div>
  );
};

const ItemActive = () => {
  return (
    <Form.Group className="mb-3" controlId="active">
      <SlideToggle label="Ativo" />
    </Form.Group>
  );
};

const ItemPrice = ({ price }) => {
  return (
    <h5>
      <strong>{numberToCurrency(price)}</strong>
    </h5>
  );
};

const ItemActions = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="me-2">
        <IconButton icon={FiEdit} size="sm" />
      </div>
      <IconButton icon={FiTrash2} size="sm" />
    </div>
  );
};

const CategoryItemCard = ({ name, description, img, active, price }) => {
  return (
    <Card>
      <div className="row align-items-center">
        <div className="col-md-3">
          <ItemImg />
        </div>
        <div className="col-md-3 py-4">
          <ItemInfo name={name} description={description} />
        </div>
        <div className="col-md-2 d-flex justify-content-center py-4">
          <ItemActive />
        </div>
        <div className="col-md-2 d-flex justify-content-center py-4">
          <ItemPrice price={7900} />
        </div>
        <div className="col-md-2 d-flex justify-content-end py-4 pe-5">
          <ItemActions />
        </div>
      </div>
    </Card>
  );
};

export default CategoryItemCard;
