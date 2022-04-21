import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import ItemCard from "./ItemCard";
import AddItemModal from "./AddItemModal";
import CategoryDetailsModal from "./CategoryDetailsModal";
import IconLabelButton from "../../components/UI/IconLabelButton";

const Category = ({ categories, category }) => {
  const { items } = category;
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

      <div className="my-5">
        {!items?.length && (
          <span className="d-flex justify-content-center">
            Nenhum item encontrado
          </span>
        )}

        {(items || []).map((item) => (
          <div key={item._id} className="mb-3">
            <ItemCard {...item} />
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
