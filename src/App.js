import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./GlobalStyle.css";
import { About, Contact, Home, Portfolio } from "./Pages";
import { Navbar, Theme } from "./Components";
function App() {
  return (
    <Router>
      <Navbar />
      <Theme />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
