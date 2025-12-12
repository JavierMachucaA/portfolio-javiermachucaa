import './Main.css';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function Main() {
    const [activeTab, setActiveTab] = useState('About');
    const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

    const createParticles = (x: number, y: number) => {
        const particleCount = 30;
        const colors = ['#ffb300', '#ffd700', '#ffaa00'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 5 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';

            document.body.appendChild(particle);

            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 60 + 20;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            gsap.to(particle, {
                x: tx,
                y: ty,
                opacity: 0,
                duration: Math.random() * 0.5 + 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    document.body.removeChild(particle);
                }
            });
        }
    };

    const handleNavClick = (tab: string) => {
        setActiveTab(tab);
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
        createParticles(centerX, centerY);
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
        // The navItemsRef is still used for potential future direct DOM manipulations or if we need to access the LI elements.
        // However, the event listeners for mouse enter/leave are now handled via React props on the <a> tags.
    }, []);

    const navTabs = ['About', 'Resume', 'Portfolio', 'Contact'];

    return (
        <div className="main-container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <ul className="nav-list">
                    {navTabs.map((tab, index) => (
                        <li
                            key={tab}
                            ref={(el) => { navItemsRef.current[index] = el; }}
                            className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                        >
                            <a
                                href={`#${tab.toLowerCase()}`}
                                onClick={() => handleNavClick(tab)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* About Me Section */}
            <section id="about" className="about-section">
                <h2 className="section-title">About Me</h2>
                <section className="inner-content">
                    <p className="about-text">
                        I’m Javier Machuca, a software engineer with more than 8 years of experience designing, building, and maintaining scalable software solutions. My background is mainly focused on backend and full-stack development, where I have worked on enterprise and high-impact projects across different industries, including public sector platforms, auditing systems, and cloud-based services.
                    </p>
                    <p className="about-text">
                        Throughout my career, I have specialized in Java and Spring Boot, developing robust microservices, REST APIs, and batch processes with a strong emphasis on performance, security, and maintainability. I have also worked extensively with Python, mainly using Flask and having solid knowledge of Django, building APIs and backend services deployed in cloud environments. I am comfortable working with relational and non-relational databases such as PostgreSQL, Oracle, MySQL, and MongoDB, and I pay close attention to query optimization and data modeling.
                    </p>
                    <p className="about-text">
                        In addition to backend development, I have worked for several years as a Full-Stack Developer, collaborating with frontend teams using Angular (from early versions up to recent ones). This experience allows me to communicate effectively across teams, contribute to API design aligned with frontend needs, and support end-to-end feature development.
                    </p>
                    <p className="about-text">
                        I strongly value clean code, documentation, and good development practices, including SOLID principles, testing, and clear architectural decisions. I enjoy being part of teams that care about quality and continuous improvement, and I’m always open to learning new technologies and approaches when they add value to the product.
                    </p>
                    <p className="about-text">
                        I’m motivated by working on meaningful projects, solving real problems, and contributing to software that has a positive impact on users and organizations, while continuing to grow professionally in collaborative and technically strong environments.
                    </p>
                </section>
            </section>

            {/* What I'm Doing Section */}
            <section className="services-section">
                <h2 className="section-title">What I'm Doing</h2>
                <div className="services-grid">
                    <article className="service-card">
                        <div className="service-icon">🎨</div>
                        <div className="service-content">
                            <h3>UI/UX Design</h3>
                            <p>The most modern and high-quality design made at a professional level.</p>
                        </div>
                    </article>

                    <article className="service-card">
                        <div className="service-icon">💻</div>
                        <div className="service-content">
                            <h3>Frontend Development</h3>
                            <p>High-quality frontend development of sites at the professional level.</p>
                        </div>
                    </article>

                    <article className="service-card">
                        <div className="service-icon">⚙️</div>
                        <div className="service-content">
                            <h3>Backend Development</h3>
                            <p>Professional backend development of applications in JavaScript.</p>
                        </div>
                    </article>

                    <article className="service-card">
                        <div className="service-icon">🤖</div>
                        <div className="service-content">
                            <h3>Machine Learning</h3>
                            <p>I specialize in developing high-quality machine learning applications.</p>
                        </div>
                    </article>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2 className="section-title">Testimonials</h2>
                <div className="testimonials-container">
                    <article className="testimonial-card">
                        <div className="testimonial-avatar">👤</div>
                        <div className="testimonial-content">
                            <h4>Masru Ahmed Rafi</h4>
                            <p className="testimonial-role">CEO & Co-Founder</p>
                            <p className="testimonial-text">
                                Touhidul Islam Chayan, has been employed with our company since March 2020 as a Frontend developer.
                            </p>
                        </div>
                    </article>

                    <article className="testimonial-card">
                        <div className="testimonial-avatar">👤</div>
                        <div className="testimonial-content">
                            <h4>Rayeean Shafkat</h4>
                            <p className="testimonial-role">CEO & Co-Founder</p>
                            <p className="testimonial-text">
                                This is to certify that Touhidul Islam Chayan worked for a full-time Full Stack Developer position.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Main;