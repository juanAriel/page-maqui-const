import { useState } from "react";
import "./App.css";
import Header from "./components/organisms/Header";
import MainContent from "./components/organisms/MainContent";

function App() {
  const [] = useState(0);

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default App;
