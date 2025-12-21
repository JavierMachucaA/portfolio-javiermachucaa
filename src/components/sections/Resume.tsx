import { useLanguage } from '../../context/LanguageContext';
import { FaBookOpen, FaBriefcase, FaDownload } from "react-icons/fa6";
import './Resume.css';

function Resume() {
    const { content, language } = useLanguage();
    const { resume } = content;

    const resumeUrl = language === 'en'
        ? `${import.meta.env.BASE_URL}CV/CV_Javier_Machuca_CPRW_ATS.pdf`
        : `${import.meta.env.BASE_URL}CV/CV_Javier_Machuca_CPRW_ATS_ES_FORMATADO_v4.pdf`;

    const paperResumeTitle = language === 'en' ? "Paper Resume" : "Curriculum Vitae";
    const paperResumeSubtitle = language === 'en' ? "Download In A Pdf Format" : "Descargar en formato PDF";

    return (
        <section id="resume" className="resume-section active">
            <header className="resume-header">
                <h2 className="section-title">Resume</h2>
            </header>

            <div className="resume-content-grid">
                <div className="resume-column">
                    <div className="column-header">
                        <div className="icon-box">
                            <FaBookOpen />
                        </div>
                        <h3>Education</h3>
                    </div>

                    <div className="timeline">
                        {resume.education.map((item: any, index: number) => (
                            <div className="timeline-item" key={index}>
                                <h4 className="timeline-title">{item.title}</h4>
                                <span className="timeline-date">{item.year}</span>
                                <p className="timeline-place">{item.place}</p>
                                <p className="timeline-text">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="resume-column">
                    <div className="column-header">
                        <div className="icon-box">
                            <FaBriefcase />
                        </div>
                        <h3>Experience</h3>
                    </div>

                    <div className="timeline">
                        {resume.experience.map((item: any, index: number) => (
                            <div className="timeline-item" key={index}>
                                <h4 className="timeline-title">{item.title}</h4>
                                <span className="timeline-date">{item.year}</span>
                                <p className="timeline-place">{item.place}</p>
                                <p className="timeline-text">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <h3 className="skills-title">My Skills</h3>
                <div className="skills-grid">
                    {resume.skills.map((skill: any, index: number) => (
                        <div className="skill-item" key={index}>
                            <div className="skill-info">
                                <p>{skill.name}</p>
                                <p>{skill.value}%</p>
                            </div>
                            <div className="skill-bar-bg">
                                <div
                                    className="skill-bar-fill"
                                    style={{ width: `${skill.value}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="paper-resume-section">
                <div className="paper-resume-info">
                    <h3 className="paper-resume-title">{paperResumeTitle}</h3>
                    <p className="paper-resume-subtitle">{paperResumeSubtitle}</p>
                </div>
                <a href={resumeUrl} download className="paper-resume-download">
                    <FaDownload />
                    <span>Download</span>
                </a>
            </div>
        </section>
    );
}

export default Resume;
