export default function Skills() {

    const skills = [
        {
            icon: "⚙️",
            name: "Laravel / PHP",
            desc: "Building scalable Laravel apps with APIs, authentication, and clean architecture patterns.",
            pct: 95
        },
        {
            icon: "⚛️",
            name: "React.js",
            desc: "Developing dynamic UIs with hooks, reusable components, and seamless API integration.",
            pct: 85
        },
        {
            icon: "🌐",
            name: "HTML / CSS / Bootstrap",
            desc: "Creating responsive layouts with modern design, cross-browser support, and clean UI.",
            pct: 90
        },
        {
            icon: "🗄️",
            name: "MySQL / PostgreSQL",
            desc: "Designing efficient databases with optimized queries, relationships, and migrations.",
            pct: 82
        },
        {
            icon: "🔗",
            name: "REST API Design",
            desc: "Building secure APIs with authentication, versioning, and third-party integrations.",
            pct: 85
        },
        {
            icon: "⚡",
            name: "AJAX / jQuery",
            desc: "Handling async requests and DOM updates for smooth, fast, and interactive UI behavior.",
            pct: 85
        }
    ];

    return (
        <>
            <section id="skills" className="skills-sec container-fluid py-5">
                <div>

                    <div className="rv text-center mb-5">
                        <div className="eyebrow">Expertise</div>
                        <h2 className="sec-title">My Tech Stack</h2>
                        <p className="sec-sub">
                            Full-cycle development from database schema to pixel-perfect UI — specialising in the Laravel ↔ React bridge that powers modern web products.
                        </p>
                    </div>

                    <div className="sg row" id="skills-grid">

                        {skills.map((skill, index) => (
                            <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
                                <div className="sc" data-pct={skill.pct}>
                                    <div className="si-wrap">{skill.icon}</div>
                                    <div className="sn">{skill.name}</div>
                                    <div className="sd">{skill.desc}</div>
                                    <div className="sb">
                                        <div
                                            className="sf"
                                            style={{ width: `${skill.pct}%` }}
                                        ></div>
                                    </div>
                                    <div className="sp">{skill.pct}%</div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}