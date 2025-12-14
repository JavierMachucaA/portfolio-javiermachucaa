import './Sidebar.css';
import { MdEmail, MdPhone, MdCake, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className='profile-section'>
                <div className='profile-image-container'>
                    <img src={`${import.meta.env.BASE_URL}images/profile-img.png`} alt="Profile" className="profile-image" />
                </div>
                <h2 className='profile-name'>Javier Machuca</h2>
                <h3 className='profile-title'>Software Engineer</h3>
            </div>
            <div className='contact-section'>
                <div className='contact-item'>
                    <div className='contact-icon'>
                        <MdEmail />
                    </div>
                    <div className='contact-text'>
                        <p className='contact-label'>EMAIL</p>
                        <p className='contact-value'><a href="mailto:javier.machuca.a@gmail.com">javier.machuca.a@gmail.com</a></p>
                    </div>
                </div>
                <div className='contact-item'>
                    <div className='contact-icon'>
                        <MdPhone />
                    </div>
                    <div className='contact-text'>
                        <p className='contact-label'>PHONE</p>
                        <p className='contact-value'>+56 9 9411 4742</p>
                    </div>
                </div>
                <div className='contact-item'>
                    <div className='contact-icon'>
                        <MdCake />
                    </div>
                    <div className='contact-text'>
                        <p className='contact-label'>BIRTHDAY</p>
                        <p className='contact-value'>19/09/1993</p>
                    </div>
                </div>
                <div className='contact-item'>
                    <div className='contact-icon'>
                        <MdLocationOn />
                    </div>
                    <div className='contact-text'>
                        <p className='contact-label'>LOCATION</p>
                        <p className='contact-value'>Villa Alemana, Chile 🇨🇱 </p>
                    </div>
                </div>
            </div>

            <div className="social-section">
                <a href="https://github.com/JavierMachucaA" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/javier-ignacio-machuca-5182bb74" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/javier.machuca.a" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                </a>
                <a href="https://x.com/javiermachucaa1" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaXTwitter />
                </a>
                <a href="https://www.facebook.com/javier.machuca1" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaFacebook />
                </a>
            </div>
        </div >
    );
}

export default Sidebar;
