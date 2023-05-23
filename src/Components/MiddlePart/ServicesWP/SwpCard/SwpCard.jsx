import "./SwpCard.css";

function SwpCard({ item }) {
  let { image, discount, name } = item;

  return (
    <div className="swp--card">
      <span className="swp--card--discount">{discount}% Off</span>
      <img className="swp--card--image" src={image} alt={name} />

      <div className="swp--card--name">{name}</div>
      <div className="swp--card--overlay"></div>
    </div>
  );
}

export default SwpCard;
