import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Category from "./Category";

const categories = [
  {
    id: 1,
    name: "Porções",
  },
  {
    id: 2,
    name: "Bebidas",
  },
  {
    id: 3,
    name: "Espetos",
  },
  {
    id: 4,
    name: "Sobremesas",
  },
];

const Categories = () => {
  return (
    <Tabs fill justify defaultActiveKey={1} id="categories-tab">
      {categories.map((category) => (
        <Tab key={category.id} eventKey={category.id} title={category.name}>
          <div className="my-4">
            <Category {...category} />
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default Categories;
