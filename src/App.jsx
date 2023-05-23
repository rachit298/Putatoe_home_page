import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MiddlePart from "./Components/MiddlePart/MiddlePart";

function App() {
  return (
    <>
      <div className="mobile-view">
        <Header />
        <MiddlePart />
        <Footer />
      </div>
    </>
  );
}

export default App;
