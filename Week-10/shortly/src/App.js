import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Display from "./components/Display";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [link, setLink] = useState("");

  return (
    <>
      <Navbar />
      <Body setLink={setLink} />
      <Display link={link} /> 
      <Footer />
    </>
  );
}

export default App;