import { Fragment } from "react";

function ListGroup() {
  const items = [
    "Philippines",
    "Finland",
    "Sweden",
    "Norway",
    "Denmark",
    "Germany",
  ];

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
