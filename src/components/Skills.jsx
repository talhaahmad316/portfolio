import '../assets/css/Skills.css';

const groups = [
  {
    title: 'Frontend',
    skills: [
      { icon: 'devicon-react-original colored', name: 'React' },
      { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
      { icon: 'devicon-html5-plain colored', name: 'HTML5' },
      { icon: 'devicon-css3-plain colored', name: 'CSS3' },
      { icon: 'devicon-bootstrap-plain colored', name: 'Bootstrap' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { icon: 'devicon-php-plain colored', name: 'PHP' },
      { icon: 'devicon-mysql-plain colored', name: 'MySQL' },
      { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
      { icon: 'devicon-nodejs-plain colored', name: 'Node.js' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { icon: 'devicon-laravel-original colored', name: 'Laravel' },
      { icon: 'devicon-git-plain colored', name: 'Git' },
      { icon: 'devicon-github-original', name: 'GitHub' },
      { icon: 'devicon-vitejs-plain colored', name: 'Vite' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-sec">
      <div className="container">
        <div className="rv text-center mb-5">
          <div className="eyebrow">Expertise</div>
          <h2 className="sec-title">My Tech Stack</h2>
          <p className="sec-sub">A focused stack for building responsive interfaces, dependable backends, and practical product workflows.</p>
        </div>

        <div className="skill-groups" id="skills-grid">
          {groups.map((group, groupIndex) => (
            <div className="skill-group rv" style={{ transitionDelay: `${groupIndex * 0.08}s` }} key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-chip" key={skill.name}>
                    <i className={skill.icon} aria-hidden="true"></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
