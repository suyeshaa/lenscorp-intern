import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      {/* <Navbar></Navbar> */}

      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
