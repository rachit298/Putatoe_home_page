import AllServices from "./AllServices/AllServices";
import Recharge from "./Recharge/Recharge";
import ShopByCate from "./ShopByCate/ShopByCate";
import "../../Styles/CommonStyles.css";
import PSP from "./PSP/PSP";
import APSP from "./APSP/APSP";
import ServicesWP from "./ServicesWP/ServicesWP";

function MiddlePart() {
  return (
    <>
      <div
        style={{ backgroundColor: "#f2f4f7", padding: "5px" }}
        className="middle-part-content"
      >
        <div className="middle-part">
          <Recharge />
          <AllServices />
          <ShopByCate />
          <PSP />
          <APSP />
          <ServicesWP />
        </div>
      </div>
    </>
  );
}

export default MiddlePart;
