import Category from "./Category";

const categories = [
  {
    name: "Porções",
  },
  {
    name: "Bebidas",
  },
  {
    name: "Espetos",
  },
  {
    name: "Sobremesas",
  },
];

const Categories = () => {
  return (
    <>
      {categories.map((category) => (
        <div key={category.name}>
          <Category {...category} />
        </div>
      ))}
    </>
  );
};

export default Categories;
