import "./Cards.css";

function Cards({ item }) {
  const { discount, name, image } = item;

  return (
    <div className="card">
      <img src={image} alt="image" width="60px" />
      <div className="card--name">{name}</div>
      <div className="card--discount">
        UP TO <span className="card--discount--rate">{discount}</span>
      </div>
    </div>
  );
}

export default Cards;
