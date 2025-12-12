import { useLanguage } from '../../context/LanguageContext';

function About() {
    const { content } = useLanguage();

    return (
        <section id="about" className="about-section">
            <h2 className="section-title">{content.headings.about}</h2>
            <section className="inner-content">
                {content.about.map((paragraph, index) => (
                    <p key={index} className="about-text">
                        {paragraph}
                    </p>
                ))}
            </section>
        </section>
    );
}

export default About;
