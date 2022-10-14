import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import Home from "./component/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
        <Home />
      </Router>
    </div>
  );
}

export default App;
