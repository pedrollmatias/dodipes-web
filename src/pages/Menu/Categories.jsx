import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Category from "./Category";

const Categories = ({ categories }) => {
  const [firstCategory] = categories || [];

  return (
    <Tabs
      fill
      justify
      defaultActiveKey={firstCategory?._id}
      id="categories-tab"
    >
      {categories?.map((category) => (
        <Tab key={category._id} eventKey={category._id} title={category.name}>
          <div className="my-4">
            <Category category={category} categories={categories} />
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default Categories;
