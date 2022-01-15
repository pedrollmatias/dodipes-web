import Card from "react-bootstrap/Card";

const CategoryItemCard = ({ name, description, img, active, price }) => {
  return (
    <Card className="d-flex">
      <div className="d-flex flex-column">
        <span className="mb-3">
          <strong>{name}</strong>
        </span>

        <p>{description}</p>
      </div>
    </Card>
  );
};

export default CategoryItemCard;
