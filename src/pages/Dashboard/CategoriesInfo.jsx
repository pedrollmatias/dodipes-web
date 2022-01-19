import SectionTitle from "../../components/UI/SectionTitle";
import CategoriesChart from "./CategoriesChart";

const categories = [
  {
    name: "Porções",
    totalItems: 12,
  },
  {
    name: "Espetos",
    totalItems: 27,
  },
  {
    name: "Bebidas",
    totalItems: 7,
  },
  {
    name: "Cervejas",
    totalItems: 67,
  },
  {
    name: "Sobremesas",
    totalItems: 9,
  },
  {
    name: "Miscelanias",
    totalItems: 21,
  },
];

const CategoriesInfo = () => {
  const getTotalItems = (categories) =>
    categories.reduce((total, { totalItems }) => (total += totalItems), 0);

  return (
    <div>
      <SectionTitle className="mb-3">Categorias</SectionTitle>

      <div className="mb-3">
        <CategoriesChart categories={categories} />
      </div>

      <h5><strong>Total: </strong>{getTotalItems(categories)}</h5>
    </div>
  );
};

export default CategoriesInfo;
