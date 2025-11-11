import ListGroup from "./components/ListGroup";

function App() {
  const countries = [
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

  return (
    <div className="container mt-3">
      <ListGroup items={countries} heading="European Countries" />
    </div>
  );
}

export default App;
