import '../assets/css/Projects.css';
import img1 from '../assets/images/monmatics.png';
import img2 from '../assets/images/marketplace.png';
import img3 from '../assets/images/cnc.png';
import img4 from '../assets/images/ngo.png';
import img5 from '../assets/images/audit.png';
import img6 from '../assets/images/ucl.png';
import ScrambleBtn from '../helper/ScrambleBtn';

const projects = [
  {
    image: img1,
    class: 'c1',
    textIndex: 0,
    badges: ['Laravel', 'React.js', 'MySQL', 'AJAX','jQuery', 'Bootstrap'],
    demo: 'https://monmatics.com/',
  },
  {
    image: img2,
    class: 'c3',
    textIndex: 1,
    badges: ['React.js', 'Laravel', 'MySQL', 'Bootstrap'],
    demo: 'https://mycargomanager.com/',
  },
  {
    image: img3,
    class: 'c2',
    textIndex: 2,
    badges: ['Laravel', 'MySQL', 'AJAX', 'jQuery', 'Bootstrap'],
    demo: 'https://dev.monmatics.com/cnc',
  },
  {
    image: img4,
    class: 'c4',
    textIndex: 3,
    badges: ['Laravel', 'MySQL', 'Admin Panel', 'Accounting'],
    demo: 'https://monmatics.com/markaz',
  },
  {
    image: img5,        // ← add your audit screenshot as img5
    class: 'c5',
    textIndex: 4,
    badges: ['Laravel', 'React.js', 'MySQL', 'AJAX', 'jQuery', 'Bootstrap'],
    demo: 'https://audit.monmatics.com/',
  },
  {
    image: img6,
    class: 'c6',
    textIndex: 5,
    badges: ['Laravel', 'MySQL', 'REST API', 'Admin Panel'],
    demo: '#',
  },
];

export default function Projects({ t }) {
  const ProjectLinks = ({ project }) => (
    <div className="pl">
      <ScrambleBtn label={t.liveDemo} href={project.demo} target="_blank" />
      {/* <a href={project.demo} target="_blank" rel="noreferrer">{t.liveDemo}</a> */}
    </div>
  );

  return (
    <section id="projects" className="projects-sec">
      <div className="container">
        <div className="rv text-center mb-5">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2 className="sec-title">{t.title}</h2>
          <p className="sec-sub">{t.subtitle}</p>
        </div>

        <div className="pg">
          {projects.map((project, index) => (
            <article className="pc rv" style={{ transitionDelay: `${index * 0.08}s` }} key={t.items[project.textIndex].title}>
              <div className={`pv ${project.class}`}>
                <img src={project.image} alt={t.items[project.textIndex].title} />
              </div>
              <div className="pb">
                <div className="pbadges">
                  {project.badges.map((badge) => <span className="bge" key={badge}>{badge}</span>)}
                </div>
                <h3 className="pt">{t.items[project.textIndex].title}</h3>
                <p className="pd">{t.items[project.textIndex].desc}</p>
                <div className="pnarrative">
                  <div>
                    <span>{t.problem}</span>
                    <p>{t.items[project.textIndex].problem}</p>
                  </div>
                  <div>
                    <span>{t.solution}</span>
                    <p>{t.items[project.textIndex].solution}</p>
                  </div>
                </div>
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
