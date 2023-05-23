import { nanoid } from "nanoid";
import "./PSP.css";
import Cards from "./Cards/PSPCards";

function PSP() {
  let items = [
    {
      id: nanoid(),
      image:
        "https://5.imimg.com/data5/FV/KM/VR/ANDROID-24738757/product-jpeg-500x500.jpg",
      name: "Royal Brick",
    },
    {
      id: nanoid(),
      image:
        "https://images1.livehindustan.com/uploadimage/library/2022/07/08/16_9/16_9_1/people_building_houses_relief_cm_yogi_adityanath_big_order_sand_moorang_and_ballast_1657288744.jpg",
      name: "Delhi bihar morang",
    },
    {
      id: nanoid(),
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/5/JF/ZS/MG/126955422/acc-hpc-long-life-cement-1000x1000.jpg",
      name: "Acc Gold",
    },
    {
      id: nanoid(),
      image:
        "https://5.imimg.com/data5/FV/KM/VR/ANDROID-24738757/product-jpeg-500x500.jpg",
      name: "Royal Brick",
    },
    {
      id: nanoid(),
      image:
        "https://images1.livehindustan.com/uploadimage/library/2022/07/08/16_9/16_9_1/people_building_houses_relief_cm_yogi_adityanath_big_order_sand_moorang_and_ballast_1657288744.jpg",
      name: "Delhi bihar morang",
    },
    {
      id: nanoid(),
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/5/JF/ZS/MG/126955422/acc-hpc-long-life-cement-1000x1000.jpg",
      name: "Acc Gold",
    },
    {
      id: nanoid(),
      image:
        "https://5.imimg.com/data5/FV/KM/VR/ANDROID-24738757/product-jpeg-500x500.jpg",
      name: "Royal Brick",
    },
    {
      id: nanoid(),
      image:
        "https://images1.livehindustan.com/uploadimage/library/2022/07/08/16_9/16_9_1/people_building_houses_relief_cm_yogi_adityanath_big_order_sand_moorang_and_ballast_1657288744.jpg",
      name: "Delhi bihar morang",
    },
    {
      id: nanoid(),
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/5/JF/ZS/MG/126955422/acc-hpc-long-life-cement-1000x1000.jpg",
      name: "Acc Gold",
    },
  ];

  return (
    <div className="psp">
      <div className="psp--title title">Popular Service Products</div>
      <div className="psp--construction construction">Construction</div>
      <div className="psp--cards">
        {items.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PSP;
