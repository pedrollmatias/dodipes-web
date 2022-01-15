import Card from "react-bootstrap/Card";

import Divider from "../../components/UI/Divider";

const ListCardHeader = ({ title }) => {
  return (
    <>
      <div className="p-3 w-100">
        <span className="m-0">
          <strong>{title}</strong>
        </span>
      </div>
      <div className="px-3">
        <Divider />
      </div>
    </>
  );
};

const ListCard = ({ title }) => {
  return (
    <Card className={`d-flex flex-column h-100`}>
      <ListCardHeader title={title} />
    </Card>
  );
};

export default ListCard;
