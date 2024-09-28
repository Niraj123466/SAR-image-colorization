import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageColorization from './components/ImageColorization';
import ContactUs from './components/ContactUs'
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="bg-gray-900 min-h-screen">
                <Routes>
                    <Route path="/" element={
                      <>
                      <Navbar/>
                      <ImageColorization/>
                      <Footer/>
                      </>
                    } />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
