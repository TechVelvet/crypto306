import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ErrorPage from "./pages/ErrorPage";
import Dubai from "./pages/Dubai";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [scrollState, setScrollState] = useState(false)

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    handleScrollTop();

    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        setScrollState(true);
      }
      else {
        setScrollState(false);
      }
    })


  }, []);




  return (
    <div className="App relative">
      {
        scrollState && <button
          type="button"
          className="fixed z-50 bottom-5 right-5  rounded-full bg-maincolor  p-3 text-xs font-medium uppercase leading-tight text-white shadow-xl border border-solid border-buttonborder transition duration-150 ease-in-out hover:bg-[#A9EFFF] hover:shadow-lg active:bg-[#A9EFFF] active:shadow-lg"
          id="btn-back-to-top"
          onClick={handleScrollTop} 
          >
          <svg aria-hidden="true" focusable="false" data-prefix="fas" className="h-4 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
          </svg>
        </button>
      }

      <BrowserRouter>
        <Header
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
        />
        <Routes>
          <Route index path="/" element={<Home selectedIndex={selectedIndex} />} />
          <Route path="/Dubai" element={<Dubai selectedIndex={selectedIndex}  />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
