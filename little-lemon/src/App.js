import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importación de los componentes
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import BookingForm from './BookingForm';
import About from './About';
import ConfirmedBooking from './ConfirmedBooking';
import Contact from './Contact';
import Menu from './Menu';

const App = () => {
  return (
    <Router>
      <div className="container">
        <header>
          <Header />
        </header>

        <nav>
          <Nav />
        </nav>

        <main>
          <Routes>
            {/* Ruta principal con el formulario de reserva */}
            <Route path="/" element={<Main />} />

            {/* Ruta de confirmación de reserva */}
            <Route path="/confirmed" element={<ConfirmedBooking />} />

            {/* Ruta About (si se desea mantener) */}
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/menu" element={<Menu />} />

          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
