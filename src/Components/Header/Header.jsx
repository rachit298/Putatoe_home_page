import "./Header.css";

function Header() {
  return (
    <>
      <div className="upper-part">
        <img
          src="https://cdn-icons-png.flaticon.com/128/535/535239.png"
          alt="location-icon"
          width="25px"
          height="25px"
        />
        <div className="header--upper-part">
          Harhwa Fatak Nirala Nagar, Gorakhpur
        </div>
        <div className="bellicon">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png"
            alt="bellicon"
            width="25px"
            height="25px"
          />
          <div className="counter">0</div>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/4766/4766056.png"
          alt="carticon"
          width="25px"
          height="25px"
        />
      </div>
      <div className="lower-part">
        <div className="lower-inputsection">
          <img
            src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
            alt="search-icon"
            className="lower-part--search"
            width="20px"
            height="20px"
          />
          <input
            className="header--lower-part--input"
            type="text"
            placeholder="Search for Products..."
          ></input>
        </div>
        <img
          className="lower-part--microphone"
          src="https://cdn-icons-png.flaticon.com/128/1082/1082810.png"
          alt="microphoneicon"
          width="25px"
          height="25px"
        />
      </div>
    </>
  );
}

export default Header;
