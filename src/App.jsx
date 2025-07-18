import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import InfoCenter from "./pages/InfoCenter";
import NewsEvents from "./pages/NewsEvents";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/info-center" element={<InfoCenter />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
