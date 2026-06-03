import '../assets/css/Blog.css';

export default function Blog({ t }) {
  return (
    <section id="blog" className="blog-sec">
      <div className="container">
        <div className="rv text-center mb-5">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2 className="sec-title">{t.title}</h2>
          <p className="sec-sub">{t.subtitle}</p>
        </div>

        <div className="blog-grid">
          {t.posts.map((post, index) => (
            <article className="blog-card rv" style={{ transitionDelay: `${index * 0.08}s` }} key={post.title}>
              <div className="blog-index">0{index + 1}</div>
              <p className="blog-meta">{post.meta}</p>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <a href="#contact">{t.read}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
