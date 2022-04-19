import { useState } from "react";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdAdd } from "react-icons/md";

import ItemCard from "./ItemCard";
import AddItemModal from "./AddItemModal";
import CategoryDetailsModal from "./CategoryDetailsModal";

import IconLabelButton from "../../components/UI/IconLabelButton";

const categoryItems = [
  {
    id: 1,
    name: "Filé com Fritas",
    description: "300g de picanha maturada e 500g de fritas",
    img: "aaa",
    active: true,
    price: 7990,
  },
  {
    id: 2,
    name: "Filé com Fritas",
    description: "300g de picanha maturada e 500g de fritas",
    img: "aaa",
    active: true,
    price: 7990,
  },
];

const Category = ({ categories, category }) => {
  const [categoryDetailsModalShow, setCategoryDetailsModalShow] =
    useState(false);

  const handleCategoryDetailsModalShow = () =>
    setCategoryDetailsModalShow(true);
  const handleCategoryDetailsModalHide = () =>
    setCategoryDetailsModalShow(false);

  const [isEditingItem, setIsEditingItem] = useState(false);
  const [addItemModalShow, setAddItemModalShow] = useState(false);

  const handleAddItemModalShow = (isInterval = false) => {
    setAddItemModalShow(true);
    setIsEditingItem(isInterval);
  };
  const handleAddItemModalHide = () => setAddItemModalShow(false);

  return (
    <>
      <div className="d-flex justify-content-end mb-4 w-100">
        <div className="me-3">
          <IconLabelButton
            icon={FiTrash2}
            label="Remover categoria"
            variant="danger"
            onClick={() => {}}
          />
        </div>

        <div className="me-3">
          <IconLabelButton
            icon={FiEdit}
            label="Editar categoria"
            onClick={handleCategoryDetailsModalShow}
          />
        </div>

        <IconLabelButton
          icon={MdAdd}
          label="Adicionar item"
          onClick={handleAddItemModalShow}
        />
      </div>

      <div className="mb-3">
        {categoryItems.map((categoryItem) => (
          <div key={categoryItem.id} className="mb-3">
            <ItemCard {...categoryItem} />
          </div>
        ))}
      </div>

      <AddItemModal
        show={addItemModalShow}
        onHide={handleAddItemModalHide}
        isEditing={false}
        defaultValues={{ category }}
        categories={categories}
      />
      <CategoryDetailsModal
        show={categoryDetailsModalShow}
        onHide={handleCategoryDetailsModalHide}
        isEditing={true}
      />
    </>
  );
};

export default Category;
