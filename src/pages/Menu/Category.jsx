import { FiEdit, FiTrash2 } from "react-icons/fi";

import CategoryItemCard from './CategoryItemCard';

import IconButton from "../../components/UI/IconButton";
import Divider from "../../components/UI/Divider";

const categoryItems = [
  {
    name: 'Filé com Fritas',
    description: '300g de picanha maturada e 500g de fritas',
    img: 'aaa',
    active: true,
    price: 7990
  }
]

const Category = ({ name }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 className="me-4">{name}</h5>

        <div className="me-3">
          <IconButton icon={FiEdit} size="sm" />
        </div>

        <div>
          <IconButton icon={FiTrash2} size="sm" />
        </div>
      </div>

      {categoryItems.map((categoryItem) => <div key={name} className="pb-2">
        <CategoryItemCard {...categoryItem} />
      </div>)}

      <div className="py-3">
        <Divider />
      </div>
    </>
  );
};

export default Category;
