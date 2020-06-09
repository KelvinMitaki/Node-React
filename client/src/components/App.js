import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
