import '../assets/css/Projects.css';
import img1 from '../assets/images/monmatics.png';
import img2 from '../assets/images/marketplace.png';
import img3 from '../assets/images/cnc.png';
import img4 from '../assets/images/ngo.png';
import img5 from '../assets/images/audit.png';
import img6 from '../assets/images/ucl.png';

const projects = [
  {
    image: img1,
    class: 'c1',
    title: 'Monmatics ERP System',
    desc: 'A modular ERP platform for CRM, accounts, HRM, sales, projects, and ticket management.',
    badges: ['Laravel', 'React.js', 'MySQL', 'AJAX','jQuery', 'Bootstrap'],
    demo: 'https://monmatics.com/',
  },
  {
    image: img2,
    class: 'c3',
    title: 'Freight Workspace',
    desc: 'A two-sided freight services marketplace with jobs, bidding, proposals, and acceptance flows.',
    badges: ['React.js', 'Laravel', 'MySQL', 'Bootstrap'],
    demo: 'https://mycargomanager.com/',
  },
  {
    image: img3,
    class: 'c2',
    title: 'CNC System',
    desc: 'A CNC automation tool for DAT and G-code generation with optimized machining workflows.',
    badges: ['Laravel', 'MySQL', 'AJAX', 'jQuery', 'Bootstrap'],
    demo: 'https://dev.monmatics.com/cnc',
  },
  {
    image: img4,
    class: 'c4',
    title: 'NGO Management System',
    desc: 'An admin and accounts system for donation tracking, fund management, and reporting.',
    badges: ['Laravel', 'MySQL', 'Admin Panel', 'Accounting'],
    demo: 'https://monmatics.com/markaz',
  },
  {
    image: img5,        // ← add your audit screenshot as img5
    class: 'c5',
    title: 'Audit Management System',
    desc: 'A structured audit record-keeping system for tracking, managing, and reporting audit entries.',
    badges: ['Laravel', 'React.js', 'MySQL', 'AJAX', 'jQuery', 'Bootstrap'],
    demo: 'https://audit.monmatics.com/',
  },
  {
    image: img6,
    class: 'c6',
    title: 'Cricket Tournament Manager',
    desc: 'A Laravel backend system for managing cricket teams, players, tournaments, and live scorecards — with fully documented REST APIs built for frontend integration.',
    badges: ['Laravel', 'MySQL', 'REST API', 'Admin Panel'],
    demo: null,
  },
];

export default function Projects() {
  const ProjectLinks = ({ project }) => (
    <div className="pl">
      <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
    </div>
  );

  return (
    <section id="projects" className="projects-sec">
      <div className="container">
        <div className="rv text-center mb-5">
          <div className="eyebrow">Portfolio</div>
          <h2 className="sec-title">Projects</h2>
          <p className="sec-sub">Selected React and Laravel builds with live product links, tech stacks, and clear outcomes.</p>
        </div>

        <div className="pg">
          {projects.map((project, index) => (
            <article className="pc rv" style={{ transitionDelay: `${index * 0.08}s` }} key={project.title}>
              <div className={`pv ${project.class}`}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className="pb">
                <div className="pbadges">
                  {project.badges.map((badge) => <span className="bge" key={badge}>{badge}</span>)}
                </div>
                <h3 className="pt">{project.title}</h3>
                <p className="pd">{project.desc}</p>
                <div className="pf">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
