import img1 from "../assets/images/monmatics.png";
import img2 from "../assets/images/marketplace.png";
import img3 from "../assets/images/cnc.png";
import img4 from "../assets/images/ngo.png";

export default function Projects() {

    const projects = [
        {
            image:img1,
            icon: "🏢",
            class: "c1",
            title: "Monmatics ERP System",
            desc: "Developed a full-featured ERP system with modules including CRM, Accounting, HRM, Sales, Project Management, and a Jira-like ticketing system. Built using Laravel and MySQL, with a React-based landing page and a dynamic admin dashboard powered by AJAX, jQuery, and Bootstrap.",
            badges: ["Laravel", "React.js", "MySQL", "AJAX", "jQuery", "Bootstrap", "PDF Export"],
            rating: "4.9",
            delay: "0s",
            link: "https://monmatics.com/"
        },
        {
            image:img2,
            icon: "🚚",
            class: "c3",
            title: "Freight Workspace (Upwork-Inspired Platform)",
            desc: "Developed a two-sided freelance marketplace inspired by Upwork, designed specifically for freight forwarding services. The system includes separate customer and freight forwarder registrations, job posting, bidding system, and job acceptance workflow. Customers post shipping-related jobs, while freight forwarders place bids and get selected based on proposals.",
            badges: ["React.js", "Laravel", "MySQL", "Bootstrap"],
            rating: "4.9",
            delay: ".2s",
            link:"https://mycargomanager.com/"
        },
        {
            image:img3,
            icon: "🛠️",
            class: "c2",
            title: "CNC System",
            desc: "Built a CNC automation system for generating DAT and G-code files for high-speed machining. Implemented toolpath optimization, real-time machine parameter control, and seamless integration with CNC controllers to improve precision and manufacturing efficiency.",
            badges: ["Laravel", "MySQL", "AJAX", "jQuery", "Bootstrap"],
            rating: "4.8",
            delay: ".1s",
            link: "https://dev.monmatics.com/cnc"
        },
        {
            image:img4,
            icon: "🏢",
            class: "c4",
            title: "Monmatics NGO Management System",
            desc: "Worked on the Accounts and Admin modules of an NGO management system, focusing on financial operations and system administration. Implemented features for donation tracking, fund management, and automated financial reporting. Also developed the Admin module for managing user roles, permissions, and ensuring smooth system operations for administrators, improving overall efficiency and control of organizational workflows.",
            badges: ["Laravel", "MySQL", "Admin Panel", "Accounting System"],
            rating: "4.8",
            delay: ".3s"
        }
    ];

    return (
        <>
            <section id="projects" className="container-fluid py-5">
                <div>

                    <div className="rv text-center mb-5">
                        <div className="eyebrow">Portfolio</div>
                        <h2 className="sec-title">Featured Projects</h2>
                        <p className="sec-sub">
                            A curated selection of real-world applications — each showcasing the Laravel + React integration that defines my work.
                        </p>
                    </div>

                    <div className="pg row">

                        {projects.map((project, index) => (
                            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                                <div
                                    className="pc rv"
                                    style={{ transitionDelay: project.delay }}
                                >
                                    <div className={`pv ${project.class}`}>
                                        <img src={project.image} alt={project.title} />                                    </div>

                                    <div className="pb">

                                        <div className="pbadges">
                                            {project.badges.map((badge, i) => (
                                                <span className="bge" key={i}>
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt">{project.title}</div>

                                        <div className="pd">{project.desc}</div>

                                        <div className="pf">
                                            <div className="pl">
                                                <a href={project.link} target="_blank">▶ Live Demo</a>
                                                {/* <a href="#">{`{ }`} Code</a> */}
                                            </div>
                                            <div className="pst">⭐ {project.rating}</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}