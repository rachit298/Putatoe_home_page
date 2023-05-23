import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer--home">
          <img
            src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
            alt="homeicon"
            height="25px"
            width="25px"
          />
          <div>Home</div>
        </div>
        <div className="footer--profile">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10858/10858608.png"
            alt="profile-icon"
            height="25px"
            width="25px"
          />
          <div>Profile</div>
        </div>
        <div className="footer--logo">
          <img
            src="https://www.putatoe.com/img/logo.png"
            alt="putatoe-logo"
            height="40px"
            width="40px"
            className="footer--logo--image"
          />
        </div>
        <div className="footer--follow">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1027/1027221.png"
            alt="list-icon"
            height="25px"
            width="25px"
          />
          <div>Follow list</div>
        </div>
        <div className="footer--chat">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1370/1370907.png"
            alt="chat-icon"
            height="25px"
            width="25px"
          />
          <div>Chat</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
