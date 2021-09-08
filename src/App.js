import React from "react";
import './App.css';
import Counter from "./features/counter/Counter.js"
import Navbar from "./Navbar"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter />
    </div>
  );
}

export default App;
