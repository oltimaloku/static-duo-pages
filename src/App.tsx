import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StreakPage from "./components/StreakPage";
import LanguagePage from "./components/LanguagePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page - Choose a route</div>} />
        <Route path="/streak" element={<StreakPage />} />
        <Route path="/language" element={<LanguagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
