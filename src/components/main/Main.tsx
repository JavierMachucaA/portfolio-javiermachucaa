import { useState } from 'react';
import './Main.css';
import NavBar from './NavBar';
import About from '../sections/About';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';
import { LanguageProvider } from '../../context/LanguageContext';

function Main() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <LanguageProvider>
            <div className="main-container">
                <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

                {activeTab === 0 && (
                    <>
                        <About />
                        <Services />
                        <Testimonials />
                    </>
                )}

                {activeTab === 1 && (
                    <Resume />
                )}

                {activeTab === 2 && (
                    <Contact />
                )}
            </div>
        </LanguageProvider>
    )
}

export default Main;