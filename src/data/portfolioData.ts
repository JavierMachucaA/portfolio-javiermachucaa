export type Language = 'en' | 'es';

export const PORTFOLIO_DATA = {
    en: {
        navTabs: ['About', 'Resume',  /*'Portfolio',*/ 'Contact'],
        headings: {
            about: "About Me",
            services: "What I'm Doing",
            testimonials: "Testimonials"
        },
        about: [
            "I’m Javier Machuca, a software engineer with more than 8 years of experience designing, building, and maintaining scalable software solutions. My background is mainly focused on backend and full-stack development, where I have worked on enterprise and high-impact projects across different industries, including public sector platforms, auditing systems, and cloud-based services.",
            "Throughout my career, I have specialized in Java and Spring Boot, developing robust microservices, REST APIs, and batch processes with a strong emphasis on performance, security, and maintainability. I have also worked extensively with Python, mainly using Flask and having solid knowledge of Django, building APIs and backend services deployed in cloud environments. I am comfortable working with relational and non-relational databases such as PostgreSQL, Oracle, MySQL, and MongoDB, and I pay close attention to query optimization and data modeling.",
            "In addition to backend development, I have worked for several years as a Full-Stack Developer, collaborating with frontend teams using Angular (from early versions up to recent ones). This experience allows me to communicate effectively across teams, contribute to API design aligned with frontend needs, and support end-to-end feature development.",
            "I strongly value clean code, documentation, and good development practices, including SOLID principles, testing, and clear architectural decisions. I enjoy being part of teams that care about quality and continuous improvement, and I’m always open to learning new technologies and approaches when they add value to the product.",
            "I’m motivated by working on meaningful projects, solving real problems, and contributing to software that has a positive impact on users and organizations, while continuing to grow professionally in collaborative and technically strong environments."
        ],
        services: [
            {
                icon: "🎨",
                title: "Frontend Development",
                description: "Development of responsive and maintainable frontends using Angular and React, focused on performance and clean architecture."
            },
            {
                icon: "☁️",
                title: "Backend & Cloud",
                description: "Design and implementation of scalable backend services using Java, Spring Boot, and Python, following best practices and clean code."
            },
            {
                icon: "⚙️",
                title: "API Development",
                description: "Development of RESTful APIs and microservices, focused on performance, scalability, and integration with distributed systems."
            },
            {
                icon: "🧪",
                title: "Quality & DevOps",
                description: "Experience deploying applications using Docker, Kubernetes, and cloud services (AWS/GCP), collaborating closely with DevOps teams."
            }
        ],
        testimonials: [
            {
                avatar: "👤",
                name: "Cristian Hurtado Rojas",
                role: "FullStack Developer",
                text: "Javier is an excellent professional with extensive knowledge and a quick ability to understand challenges, technologies, and programming languages. Added to all this is his great communication skill and desire to teach."
            },
            {
                avatar: "👤",
                name: "Fernando Riffo Matamala",
                role: "FullStack Developer Senior",
                text: "Javier stands out for his technical solidity, his ability to solve complex problems, and his constant orientation towards efficiency and quality in every delivery. His contribution was key in challenging initiatives where reliability, security, and scalability were fundamental. In addition to his technical ability, Javier is a proactive, collaborative person who is always willing to support the team. His positive attitude and commitment made a big difference in the success of our projects."
            },
            {
                avatar: "👤",
                name: "Jorge Marquez Robinson",
                role: "Senior Software Engineer",
                text: "Excellent professional with knowledge in Java, Python, and GCP."
            }
        ],
        resume: {
            education: [
                {
                    year: "2012 — 2016",
                    title: "Computer Engineering",
                    place: "Pontifical University Catholic of Valparaiso",
                    description: "Comprehensive training in software development, project management, and systems architecture."
                }
            ],
            experience: [
                {
                    year: "10/2021 — 10/2025",
                    title: "Senior Full Stack Developer",
                    place: "Banco Ripley",
                    description: "Developed cloud-based solutions using AWS services such as S3, Directory Service, Glue, and Athena. Designed and implemented microservices in Java Spring Boot and Python, integrating with Oracle 19c. Built internal tools and web components using Angular. Led deployments on Google Cloud Run using Pub/Sub, MySQL, and cloud-native pipelines. Improved system performance through refactoring, automation, and optimization of critical processes. Collaborated directly with architecture, DevOps, and data teams."
                },
                {
                    year: "06/2020 — 09/2021",
                    title: "Full Stack Developer",
                    place: "Experis",
                    description: "Modernized legacy Flash systems by migrating them to Angular and Java 8. Developed cloud-ready modules for the CyberFinancial platform deployed on AWS."
                },
                {
                    year: "10/2018 — 06/2020",
                    title: "Full Stack Developer",
                    place: "Zeke",
                    description: "Maintained the ADIS platform using Java 6, Angular 2, PostgreSQL. Developed features for the Infogás Empresas system using Laravel, Angular 6, MongoDB, and C++."
                },
                {
                    year: "02/2018 — 08/2018",
                    title: "Java Developer",
                    place: "Ingeniería Wiseconn",
                    description: "Built and maintained REST APIs for a sensor-driven monitoring platform. Worked with Java 6–8, JSF, Hibernate, PrimeFaces, WildFly."
                },
                {
                    year: "01/2016 — 01/2018",
                    title: "Backend Developer",
                    place: "Accenture",
                    description: "Developed backend systems for Movistar Chile, including: Assignment Extension, Inventory Management, Number Portability. Technologies used: Java 7, JSF, WebLogic, Oracle, SOAP, Bash."
                }
            ],
            skills: [
                { name: "Java & Spring Boot", value: 95 },
                { name: "Python (Flask/Django)", value: 85 },
                { name: "Cloud (GCP/AWS)", value: 80 },
                { name: "Frontend (React/Angular)", value: 75 },
                { name: "Database (SQL/NoSQL)", value: 90 }
            ]
        },
        contact: {
            title: "Contact",
            mapTitle: "Villa Alemana, Chile",
            form: {
                name: "Full Name",
                email: "Email Address",
                message: "Your Message",
                submit: "Send Message",
                placeholders: {
                    name: "Full Name",
                    email: "Email Address",
                    message: "Hi! I'm hiring a new role and I think you would be a perfect fit..."
                }
            }
        }
    },
    es: {
        navTabs: ['Sobre mí', 'Resumen', 'Portafolio', 'Contacto'],
        headings: {
            about: "Sobre Mí",
            services: "Lo que hago",
            testimonials: "Testimonios"
        },
        about: [
            "Soy Javier Machuca, un ingeniero de software con más de 8 años de experiencia diseñando, construyendo y manteniendo soluciones de software escalables. Mi experiencia se centra principalmente en el desarrollo backend y full-stack, donde he trabajado en proyectos empresariales de alto impacto en diferentes industrias, incluyendo plataformas del sector público, sistemas de auditoría y servicios basados en la nube.",
            "A lo largo de mi carrera, me he especializado en Java y Spring Boot, desarrollando microservicios robustos, APIs REST y procesos batch con un fuerte énfasis en rendimiento, seguridad y mantenibilidad. También he trabajado extensamente con Python, utilizando principalmente Flask y teniendo conocimientos sólidos de Django, construyendo APIs y servicios backend desplegados en entornos cloud. Me siento cómodo trabajando con bases de datos relacionales y no relacionales como PostgreSQL, Oracle, MySQL y MongoDB, prestando mucha atención a la optimización de consultas y modelado de datos.",
            "Además del desarrollo backend, he trabajado varios años como desarrollador Full-Stack, colaborando con equipos frontend utilizando Angular (desde versiones tempranas hasta las recientes). Esta experiencia me permite comunicarme efectivamente entre equipos, contribuir al diseño de APIs alineadas con las necesidades del frontend y apoyar el desarrollo de funcionalidades de extremo a extremo.",
            "Valoro fuertemente el código limpio, la documentación y las buenas prácticas de desarrollo, incluyendo principios SOLID, testing y decisiones arquitectónicas claras. Disfruto siendo parte de equipos que se preocupan por la calidad y la mejora continua, y siempre estoy abierto a aprender nuevas tecnologías y enfoques cuando agregan valor al producto.",
            "Me motiva trabajar en proyectos significativos, resolver problemas reales y contribuir a software que tenga un impacto positivo en usuarios y organizaciones, mientras continúo creciendo profesionalmente en entornos colaborativos y técnicamente sólidos."
        ],
        services: [
            {
                icon: "🎨",
                title: "Desarrollo Frontend",
                description: "Desarrollo de frontends responsivos y mantenibles utilizando Angular y React, enfocados en rendimiento y arquitectura limpia."
            },
            {
                icon: "☁️",
                title: "Backend & Cloud",
                description: "Diseño e implementación de servicios backend escalables usando Java, Spring Boot y Python, siguiendo mejores prácticas y código limpio."
            },
            {
                icon: "⚙️",
                title: "Desarrollo de APIs",
                description: "Desarrollo de APIs RESTful y microservicios, enfocados en rendimiento, escalabilidad e integración con sistemas distribuidos."
            },
            {
                icon: "🧪",
                title: "Calidad & DevOps",
                description: "Experiencia desplegando aplicaciones usando Docker, Kubernetes y servicios cloud (AWS/GCP), colaborando estrechamente con equipos DevOps."
            }
        ],
        testimonials: [
            {
                avatar: "👤",
                name: "Cristian Hurtado Rojas",
                role: "FullStack Developer",
                text: "Javier es un excelente profesional, con altísimos conocimientos y rápida capacidad de entendimiento en desafíos, tecnologías y lenguajes de programación. Todo esto se le suma su gran capacidad de comunicación y ganas de enseñar."
            },
            {
                avatar: "👤",
                name: "Fernando Riffo Matamala",
                role: "FullStack Developer Senior",
                text: "Javier destaca por su solidez técnica, su capacidad para resolver problemas complejos y su orientación constante a la eficiencia y calidad en cada entrega. Su aporte fue clave en iniciativas desafiantes donde la confiabilidad, seguridad y escalabilidad eran fundamentales. Además de su capacidad técnica, Javier es una persona proactiva, colaborativa y siempre dispuesta a apoyar al equipo. Su actitud positiva y compromiso hicieron una gran diferencia en el éxito de nuestros proyectos."
            },
            {
                avatar: "👤",
                name: "Jorge Marquez Robinson",
                role: "Senior Software Engineer",
                text: "Excelente profesional, con conocimientos en Java, Python y GCP."
            }
        ],
        resume: {
            education: [
                {
                    year: "2012 — 2016",
                    title: "Computer Engineering",
                    place: "Pontificia Universidad Católica de Valparaíso",
                    description: "Formación integral en desarrollo de software, gestión de proyectos y arquitectura de sistemas."
                }
            ],
            experience: [
                {
                    year: "10/2021 — 10/2025",
                    title: "Senior Full Stack Developer",
                    place: "Banco Ripley",
                    description: "Desarrollo de soluciones basadas en la nube utilizando servicios AWS como S3, Directory Service, Glue y Athena. Diseño e implementación de microservicios en Java Spring Boot y Python, integrando con Oracle 19c. Construcción de herramientas internas y componentes web usando Angular. Liderazgo en despliegues en Google Cloud Run usando Pub/Sub, MySQL y pipelines nativos de la nube. Mejora del rendimiento del sistema a través de refactorización, automatización y optimización de procesos críticos. Colaboración directa con equipos de arquitectura, DevOps y datos."
                },
                {
                    year: "06/2020 — 09/2021",
                    title: "Full Stack Developer",
                    place: "Experis",
                    description: "Modernización de sistemas legacy en Flash migrándolos a Angular y Java 8. Desarrollo de módulos preparados para la nube para la plataforma CyberFinancial desplegada en AWS."
                },
                {
                    year: "10/2018 — 06/2020",
                    title: "Full Stack Developer",
                    place: "Zeke",
                    description: "Mantenimiento de la plataforma ADIS usando Java 6, Angular 2, PostgreSQL. Desarrollo de funcionalidades para el sistema Infogás Empresas usando Laravel, Angular 6, MongoDB y C++."
                },
                {
                    year: "02/2018 — 08/2018",
                    title: "Java Developer",
                    place: "Ingeniería Wiseconn",
                    description: "Construcción y mantenimiento de APIs REST para una plataforma de monitoreo basada en sensores. Trabajo con Java 6–8, JSF, Hibernate, PrimeFaces, WildFly."
                },
                {
                    year: "01/2016 — 01/2018",
                    title: "Backend Developer",
                    place: "Accenture",
                    description: "Desarrollo de sistemas backend para Movistar Chile, incluyendo: Extensión de Asignación, Gestión de Inventario, Portabilidad Numérica. Tecnologías utilizadas: Java 7, JSF, WebLogic, Oracle, SOAP, Bash."
                }
            ],
            skills: [
                { name: "Java & Spring Boot", value: 95 },
                { name: "Python (Flask/Django)", value: 85 },
                { name: "Cloud (GCP/AWS)", value: 80 },
                { name: "Frontend (React/Angular)", value: 75 },
                { name: "Database (SQL/NoSQL)", value: 90 }
            ]
        },
        contact: {
            title: "Contacto",
            mapTitle: "Villa Alemana, Chile",
            form: {
                name: "Nombre Completo",
                email: "Correo Electrónico",
                message: "Tu Mensaje",
                submit: "Enviar Mensaje",
                placeholders: {
                    name: "Nombre Completo",
                    email: "Correo Electrónico",
                    message: "¡Hola! Estoy buscando un nuevo perfil y creo que encajarías perfecto..."
                }
            }
        }
    }
};
