import { useState } from "react";
import "./App.css";
import Main from "./layouts/Main/Main";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <div className="content">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
