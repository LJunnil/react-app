import { useState } from "react";

function ListGroup() {
  const items = [
    "Philippines",
    "Finland",
    "Sweden",
    "Norway",
    "Denmark",
    "Germany",
    "Italy",
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

  //  useState should be called correctly
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)} // ✅ use setSelectedIndex
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
