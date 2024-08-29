import "./App.css";
import Hero from "./components/Hero";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sections from "./pages/sections/Sections";
import Style from "./pages/stylePage/Style";

function App() {
  return (
    <Router>
      <div className="App">
        <Hero>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/sections" element={<Sections />} />
            <Route path="/style" element={<Style />} />
            <Route path="/" element={<Profile />} />
          </Routes>
        </Hero>
      </div>
    </Router>
  );
}

export default App;
