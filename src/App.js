import React from "react";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Header from "./components/header";
function App() {
  return (
    <div className="app">
      {/* Footer */}
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
