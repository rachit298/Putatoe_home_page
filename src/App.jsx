import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MiddlePart from "./Components/MiddlePart/MiddlePart";
import Chat from "./Components/MiddlePart/Chat/Chat";

function App() {
  return (
    <>
      <div className="mobile-view">
        <Header />
        <MiddlePart />
        <Chat />
        <Footer />
      </div>
    </>
  );
}

export default App;
