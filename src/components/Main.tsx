import './Main.css';
import NavBar from './NavBar';
import About from './sections/About';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import { LanguageProvider } from '../context/LanguageContext';

function Main() {
    return (
        <LanguageProvider>
            <div className="main-container">
                <NavBar />
                <About />
                <Services />
                <Testimonials />
            </div>
        </LanguageProvider>
    )
}

export default Main;