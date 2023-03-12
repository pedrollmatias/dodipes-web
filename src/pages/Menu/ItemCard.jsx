import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { numberToCurrency } from "../../lib/currency";
import SlideToggle from "../../components/UI/SlideToggle";
import IconButton from "../../components/UI/IconButton";
import classes from "./ItemCard.module.scss";
import AddItemModal from "./AddItemModal";

const ItemImg = ({ img }) => {
  return (
    <img className={`${classes["img--item"]} me-3`} alt="Food" src={img} />
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

const ItemActive = ({ active }) => {
  return (
    <Form.Group className="mb-3" controlId="active">
      <SlideToggle label="Ativo" checked={active} />
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

const ItemActions = ({ handleModalShow }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="me-2">
        <IconButton icon={FiEdit} size="sm" onClick={handleModalShow} />
      </div>
      <IconButton icon={FiTrash2} size="sm" />
    </div>
  );
};

const ItemCard = ({
  category,
  categories,
  name,
  description,
  media,
  active,
  price,
}) => {
  const [addItemModalShow, setAddItemModalShow] = useState(false);
  const handleAddItemModalShow = () => setAddItemModalShow(true);
  const handleAddItemModalHide = () => setAddItemModalShow(false);

  return (
    <>
      <Card>
        <div className="row align-items-center">
          <div className="col-md-3">
            <ItemImg img={media} />
          </div>
          <div className="col-md-3 py-4">
            <ItemInfo name={name} description={description} />
          </div>
          <div className="col-md-2 d-flex justify-content-center py-4">
            <ItemActive active={active} />
          </div>
          <div className="col-md-2 d-flex justify-content-center py-4">
            <ItemPrice price={price} />
          </div>
          <div className="col-md-2 d-flex justify-content-end py-4 pe-5">
            <ItemActions handleModalShow={handleAddItemModalShow} />
          </div>
        </div>
      </Card>

      <AddItemModal
        show={addItemModalShow}
        onHide={handleAddItemModalHide}
        isEditing={true}
        defaultValues={{ category }}
        categories={categories}
      />
    </>
  );
};

export default ItemCard;
