export type Language = 'en' | 'es';

export const PORTFOLIO_DATA = {
    en: {
        navTabs: ['About', 'Resume', 'Portfolio', 'Contact'],
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
                name: "Masru Ahmed Rafi",
                role: "CEO & Co-Founder",
                text: "Touhidul Islam Chayan, has been employed with our company since March 2020 as a Frontend developer."
            },
            {
                avatar: "👤",
                name: "Rayeean Shafkat",
                role: "CEO & Co-Founder",
                text: "This is to certify that Touhidul Islam Chayan worked for a full-time Full Stack Developer position."
            }
        ]
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
                name: "Masru Ahmed Rafi",
                role: "CEO & Co-Founder",
                text: "Touhidul Islam Chayan ha trabajado con nuestra compañía desde Marzo 2020 como desarrollador Frontend."
            },
            {
                avatar: "👤",
                name: "Rayeean Shafkat",
                role: "CEO & Co-Founder",
                text: "Esto certifica que Touhidul Islam Chayan trabajó para una posición de Desarrollador Full Stack a tiempo completo."
            }
        ]
    }
};
