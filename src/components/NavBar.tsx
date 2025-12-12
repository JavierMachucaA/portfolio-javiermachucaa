import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useParticles } from '../hooks/useParticles';
import { useLanguage } from '../context/LanguageContext';

function NavBar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
    const { triggerParticles } = useParticles();
    const { content, language, toggleLanguage } = useLanguage();

    const tabs: string[] = content.navTabs;

    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const link = e.currentTarget;

        // Zoom animation
        gsap.to(link, {
            scale: 1.3,
            duration: 0.01,
            ease: 'power2.out'
        });

        // Particle effect
        const rect = link.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 + window.scrollX;
        const centerY = rect.top + rect.height / 2 + window.scrollY;
        triggerParticles(centerX, centerY);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const link = e.currentTarget;
        gsap.to(link, {
            scale: 1,
            duration: 0.01,
            ease: 'power2.out'
        });
    };

    useEffect(() => {
        // Cleanup or additional logic if needed
    }, []);

    const sections = ['about', 'resume', 'portfolio', 'contact'];

    return (
        <nav className="navbar">
            {/* Language Toggle - Moved out of the list to be positioned separately */}
            <div className="language-toggle">
                <button
                    onClick={toggleLanguage}
                    aria-label="Toggle Language"
                >
                    {language === 'en' ? 'ES' : 'EN'}
                </button>
            </div>

            <ul className="nav-list">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        ref={(el) => { navItemsRef.current[index] = el; }}
                        className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        <a
                            href={`#${sections[index]}`}
                            onClick={() => handleNavClick(index)}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
