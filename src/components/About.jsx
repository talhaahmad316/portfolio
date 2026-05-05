export default function About() {
    return (
        <>
            {/* <!-- ABOUT --> */}
            <section id="about" style={{ background: "var(--bg2)" }}>
                <div className="container">
                    <div className="rv"><div className="eyebrow">Who I Am</div><h2 className="sec-title">About Me</h2></div>
                    <div className="about-grid" style={{ marginTop: ".5rem" }}>
                        {/* <!-- Photo + stats --> */}
                        <div className="rl">
                            <div className="ap-wrap">
                                <div className="ap">
                                    <img src="/talha.png" alt="Talha Ahmad" />
                                    <div className="ap-deco"></div>
                                </div>
                                <div className="astats">
                                    <div className="astat"><div className="astat-n">3+</div><div className="astat-l">Years Experience</div></div>
                                    <div className="astat"><div className="astat-n">20+</div><div className="astat-l">Projects Done</div></div>
                                    <div className="astat"><div className="astat-n">15+</div><div className="astat-l">Happy Clients</div></div>
                                    <div className="astat"><div className="astat-n">99%</div><div className="astat-l">Satisfaction</div></div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Details --> */}
                        <div className="rr ac">
                            <h3>Full Stack Developer bridging Laravel & React</h3>
                            <p>I'm a passionate Full Stack Developer based in Lahore, Pakistan with 3+ years of professional experience building end-to-end web applications. My specialty is the intersection between robust PHP/Laravel backends and modern React frontends — creating seamless products that are both performant and maintainable.</p>
                            <p>I take pride in writing clean, well-documented code and care deeply about developer experience, API design, and UI polish. Whether it's architecting a multi-tenant SaaS or crafting a pixel-perfect dashboard, I bring the same level of attention to every layer of the stack.</p>

                            <div className="adetails">
                                <div className="di"><span className="di-icon">📛</span><div><div className="dl">Full Name</div><div className="dv">Talha Ahmad (Full Stack Dev)</div></div></div>
                                <div className="di"><span className="di-icon">📍</span><div><div className="dl">Location</div><div className="dv">Lahore, Punjab, Pakistan</div></div></div>
                                <div className="di"><span className="di-icon">📧</span><div><div className="dl">Email</div><div className="dv"><a href="mailto:talhaahmad316@gmail.com">talhaahmad316@gmail.com</a> </div></div></div>
                                <div className="di"><span className="di-icon">📞</span><div><div className="dl">Phone</div><div className="dv"><a href="tel:+923013493802">+92 301 349 3802</a> </div></div></div>
                                <div className="di"><span className="di-icon">🎓</span><div><div className="dl">Degree</div><div className="dv">BS Computer Science</div></div></div>
                                <div className="di"><span className="di-icon">🏫</span><div><div className="dl">University</div><div className="dv">Government College University Faisalabad</div></div></div>
                                <div className="di"><span className="di-icon">💼</span><div><div className="dl">Experience</div><div className="dv">3+ Years Professional</div></div></div>
                                <div className="di"><span className="di-icon">🌐</span><div><div className="dl">Languages</div><div className="dv">Urdu, English (Fluent)</div></div></div>
                            </div>

                            <h3 style={{ marginBottom: ".75rem" }}>Career Timeline</h3>
                            <div className="tl">
                                <div className="ti"><div className="ty">2023 – PRESENT</div><div className="tr">Full Stack Developer</div><div className="tc">Freelance / Remote — International Clients</div></div>
                                {/* <div className="ti"><div className="ty">2022 – 2024</div><div className="tr">Junior Full Stack Developer</div><div className="tc">TechVentures Pvt Ltd, Lahore</div></div>
                                <div className="ti"><div className="ty">2021 – 2022</div><div className="tr">PHP Developer Intern</div><div className="tc">WebCraft Studio, Lahore</div></div> */}
                            </div>

                            <h3 style={{ margin: "1.4rem 0 .7rem" }}>Interests & Hobbies</h3>
                            <div className="interests">
                                <span className="itag">Open Source</span><span className="itag">UI/UX Design</span><span className="itag">Tech Blogging</span>
                                <span className="itag">Chess</span><span className="itag">Hiking</span><span className="itag">Sci-Fi Books</span>
                                <span className="itag">Coffee ☕</span><span className="itag">Mechanical Keyboards</span>
                            </div>

                            <div style={{
                                display: "flex",
                                gap: ".9rem",
                                marginTop: "1.8rem",
                                flexWrap: "wrap"
                            }}>
                                <a href="/Talha Ahmad.pdf" download>
                                    <button className="btn-p">Download CV</button>
                                </a>
                                <button className="btn-o" onClick={() => scrollTo('contact')}>Let's Talk</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}