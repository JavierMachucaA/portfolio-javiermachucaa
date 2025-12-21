import { useLanguage } from '../../context/LanguageContext';
import { FaPaperPlane } from "react-icons/fa6";
import './Contact.css';

function Contact() {
    const { content } = useLanguage();
    const { contact } = content;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // No action on submit as requested
    };

    return (
        <section id="contact" className="contact-section active">
            <header className="contact-header">
                <h2 className="section-title">{contact.title}</h2>
            </header>

            <div className="contact-content">
                {/* Map Section */}
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13374.524434914238!2d-71.378939!3d-33.045953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689d0b8f0a0a0a0%3A0x0!2sVilla%20Alemana%2C%20Valpara%C3%ADso%2C%20Chile!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={contact.mapTitle}
                    ></iframe>
                </div>

                {/* Form Section */}
                <div className="contact-form-container">
                    <h3 className="form-title">Contact Form</h3>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="fullname"
                                    className="form-input"
                                    placeholder={contact.form.placeholders.name}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder={contact.form.placeholders.email}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                className="form-textarea"
                                placeholder={contact.form.placeholders.message}
                                required
                            ></textarea>
                        </div>

                        <div className="form-footer">
                            <button type="submit" className="form-btn">
                                <FaPaperPlane />
                                <span>{contact.form.submit}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
