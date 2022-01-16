import { useState } from "react";
import Button from "react-bootstrap/Button";

import { FiEdit, FiTrash2 } from "react-icons/fi";

import CategoryItemCard from "./CategoryItemCard";

import IconButton from "../../components/UI/IconButton";
import Divider from "../../components/UI/Divider";
import AddItemModal from "./AddItemModal";

const categoryItems = [
  {
    name: "Filé com Fritas",
    description: "300g de picanha maturada e 500g de fritas",
    img: "aaa",
    active: true,
    price: 7990,
  },
];

const Category = ({ name }) => {
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [addItemModalShow, setAddItemModalShow] = useState(false);

  const handleAddItemModalShow = (isInterval = false) => {
    setAddItemModalShow(true);
    setIsEditingItem(isInterval);
  };
  const handleAddItemModalHide = () => setAddItemModalShow(false);

  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <h5 className="me-4">{name}</h5>

        <div className="me-2">
          <IconButton icon={FiEdit} size="sm" />
        </div>

        <div>
          <IconButton icon={FiTrash2} size="sm" />
        </div>
      </div>

      <div className="mb-3">
        {categoryItems.map((categoryItem) => (
          <div key={name} className="pb-2">
            <CategoryItemCard {...categoryItem} />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-end">
        <Button
          className="px-4"
          variant="primary"
          onClick={handleAddItemModalShow}
        >
          Adicionar item
        </Button>
      </div>

      <div className="py-3">
        <Divider />
      </div>

      <AddItemModal show={addItemModalShow} onHide={handleAddItemModalHide} />
    </>
  );
};

export default Category;
