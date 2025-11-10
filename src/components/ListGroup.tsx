import { Fragment } from "react";

function ListGroup() {
  let items = [
    "Philippines",
    "Finland",
    "Sweden",
    "Norway",
    "Denmark",
    "Germany",
    "italy",
    "Spain",
    "Portugal",
    "Greece",
    "France",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Austria",
    "Czech Republic",
    "Poland",
    "Hungary",
    "Slovakia",
    "Slovenia",
    "Croatia",
    "Serbia",
    "Romania",
    "Bulgaria",
    "Turkey",
    "Russia",
    "Ukraine",
    "Belarus",
    "Lithuania",
    "Latvia",
    "Estonia",
  ];

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found</p>}
      {}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
