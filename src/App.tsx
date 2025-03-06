import { useState } from "react";
import "./App.css";
import Header from "./components/organisms/Header";
import MainContent from "./components/organisms/MainContent";
import Footer from "./components/organisms/Footer";

function App() {
  const [] = useState(0);

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
