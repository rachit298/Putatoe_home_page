import Cards from "./Cards/Cards";
import "./ShopByCate.css";
import { nanoid } from "nanoid";

function ShopByCate() {
  let items = [
    {
      id: nanoid(),
      image:
        "https://rukminim1.flixcart.com/image/416/416/kziqvm80/column-cap-base/x/7/e/100-tn-01-t-n-cover-block-original-imagbgpzgfptguee.jpeg?q=70",
      name: "cover block",
      discount: "0%OFF",
    },
  ];

  return (
    <>
      <div className="sbc">
        <div className="sbc--title">SHOP BY CATEGORY</div>
        <div className="shop--sub-title construction">Construction</div>
        <div className="sbc--body">
          {items.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopByCate;
