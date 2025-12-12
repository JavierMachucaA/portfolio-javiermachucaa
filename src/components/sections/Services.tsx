import { useLanguage } from '../../context/LanguageContext';

function Services() {
    const { content } = useLanguage();

    return (
        <section className="services-section">
            <h2 className="section-title">{content.headings.services}</h2>
            <div className="services-grid">
                {content.services.map((service, index) => (
                    <article key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Services;
