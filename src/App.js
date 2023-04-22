import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
