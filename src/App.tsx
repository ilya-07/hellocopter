import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";
import { useSelector } from "react-redux";
import { showState } from "./redux/showBascketSlice";
import Buscket from "./components/buscket/Buscket";
import Footer from "./common/Footer";

function App() {
  const showPosition = useSelector(showState);
  return (
    <div className="flex flex-col min-h-[100vh] justify-between relative">
      <Nav />
      {showPosition ? <Buscket /> : null}
      <div className="flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
