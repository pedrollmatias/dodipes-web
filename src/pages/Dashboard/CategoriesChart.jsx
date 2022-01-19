import classes from "./CategoriesChart.module.scss";

const CategoriesChart = ({ categories }) => {
  const getCategoryWithMaxItem = () =>
    Math.max(...categories.map((category) => category.totalItems));

  const getCategoryBarWidth = ({ totalItems }) => {
    const maxWidth = 100;
    return (maxWidth * totalItems) / getCategoryWithMaxItem()
  }

  console.log(getCategoryWithMaxItem());

  return (
    <div className={`${classes["chart--categories"]} d-flex flex-column`}>
      {categories.map((category) => (
        <div key={category.name} className="row align-items-center my-2">
          <div className="col-md-4 col-xl-4 col-xxl-2">
            <span>{category.name}</span>
          </div>
          <div className="col-md-8 col-xl-8 col-xxl-10">
            <div className={classes.bar} style={{width: `${getCategoryBarWidth(category)}%`}}>{category.totalItems}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesChart;
