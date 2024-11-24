import React from "react";
import "./App.css";  // Asegúrate de que el archivo CSS está siendo importado
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">  {/* Aplica la clase container que tiene el diseño de Grid */}
      <header>
        <Header />
      </header>

      <nav>
        <Nav />
      </nav>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

