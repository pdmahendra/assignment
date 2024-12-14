import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RealTimeEventsPage from "./pages/RealTimeEventsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <RealTimeEventsPage />
      <Footer />
    </Router>
  );
}

export default App;
