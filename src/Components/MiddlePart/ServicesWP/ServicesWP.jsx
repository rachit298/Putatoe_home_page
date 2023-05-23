import { nanoid } from "nanoid";
import "./ServicesWP.css";
import SwpCard from "./SwpCard/SwpCard";

function ServicesWP() {
  let swp = [
    {
      id: nanoid(),
      image:
        "https://media.istockphoto.com/id/1219014036/video/shopping-grocery-products-stock-animation-alpha-matte.jpg?s=640x640&k=20&c=tlDAQzl1lr4ynJfD4wjVw9WgcQT9gcTry5AQ0JMgcK8=",
      name: "Daily needs",
      discount: "20",
    },
    {
      id: nanoid(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF47i5jMPRKk6iiISKdBbzyH6wxkcFwLUAg&usqp=CAU",
      name: "Construction",
      discount: "20",
    },
    {
      id: nanoid(),
      image:
        "https://cdni.iconscout.com/illustration/premium/thumb/design-consultant-6311252-5211324.png",
      name: "Consultancy",
      discount: "20",
    },
  ];
  return (
    <div className="swp">
      <div className="swp--title title">Services We Provide</div>
      <div className="swp--cards">
        {swp.map((item) => (
          <SwpCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ServicesWP;
