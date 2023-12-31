import './App.scss';
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Extensions from "./components/Extensions/Extensions";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import React, {useEffect, useState} from "react";

function App() {
    const [isModalClose, setIsModalClose] = useState(true);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (event.clientY <= 14) {
                setIsModalClose(false);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [setIsModalClose]);

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <main>
                    <Hero/>
                    <Features/>
                    <Extensions/>
                    <Faqs/>
                    <Modal isModalClose={isModalClose} setIsModalClose={setIsModalClose}/>
                </main>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
