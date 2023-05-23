import "./PSPCards.css";

function PSPCards({ item }) {
  const { image, name } = item;

  return (
    <div className="psp--card-body">
      <img src={image} alt="image" width="70px" 
      height="70px" className="psp--card-body--image" />
      <div className="psp--card-body--name">{name}</div>
    </div>
  );
}

export default PSPCards;
