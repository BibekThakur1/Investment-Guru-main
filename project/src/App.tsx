import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/contact';
import ScheduleConsultation from './pages/ScheduleConsultation';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen">
            <Header />
            <Hero />
            <Services />
            <About />
            <Contact />
            <Footer />
          </div>
        }
      />
      <Route path="/consultation" element={
        <div className="min-h-screen">
            <Header />
            <ScheduleConsultation />
            <Footer />
          </div>
      } 
      />
    </Routes>
  );
}

export default App;