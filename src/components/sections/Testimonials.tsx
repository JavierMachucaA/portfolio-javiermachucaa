import { useLanguage } from '../../context/LanguageContext';

function Testimonials() {
    const { content } = useLanguage();

    return (
        <section className="testimonials-section">
            <h2 className="section-title">{content.headings.testimonials}</h2>
            <div className="testimonials-container">
                {content.testimonials.map((testimonial, index) => (
                    <article key={index} className="testimonial-card">
                        <div className="testimonial-avatar">{testimonial.avatar}</div>
                        <div className="testimonial-content">
                            <h4>{testimonial.name}</h4>
                            <p className="testimonial-role">{testimonial.role}</p>
                            <p className="testimonial-text">{testimonial.text}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
