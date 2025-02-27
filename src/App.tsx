import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LanguageModal from "./components/LanguageModal";
import LanguagePage from "./components/LanguageModal";
import StreakPage from "./components/StreakPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StreakPage />
    </>
  );
}

export default App;
