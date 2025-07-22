import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import InfoCenter from "./pages/InfoCenter";
import NewsEvents from "./pages/NewsEvents";
import ServiceDetails from "./pages/ServiceDetails";
import EmergencyLoanForm from "./pages/EmergencyLoanForm";
import Dividends from "./pages/Dividends";
import Join from "./pages/Join";
import Contact from "./pages/Contact";

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
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/dividends" element={<Dividends />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply/emergency-loan" element={<EmergencyLoanForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
