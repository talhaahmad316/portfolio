export default function Contact() {
    return (
        <>
            {/* <!-- CONTACT --> */}
            <section id="contact" className="contact-sec">
                <div className="container py-5">

                    <div className="rv text-center mb-5">
                        <div className="eyebrow">Contact</div>
                        <h2 className="sec-title">Let's Build Together</h2>
                        <p className="sec-sub">
                            Have a project idea or a collaboration in mind? My inbox is always open.
                        </p>
                    </div>

                    <div className="cg row">

                        {/* LEFT SIDE */}
                        <div className="cc-list rv col-12 col-lg-5 mb-4">
                            <div className="cc"><div className="ci">✉️</div><div><div className="cl">Email</div><div className="cv"><a
                                href="mailto:talhaahmad316@gmail.com?subject=Project%20Inquiry&body=Hello%20Talha," className="wa-link">
                                talhaahmad316@gmail.com</a></div></div></div>
                            <div className="cc"><div className="ci">📍</div><div><div className="cl">Location</div><div className="cv">Lahore, Pakistan — Remote Friendly</div></div></div>
                            <div className="cc"><div className="ci">⏱️</div><div><div className="cl">Availability</div><div className="cv">Open to Freelance & Full-Time</div></div></div>
                            <div className="cc"><div className="ci">💬</div><div><div className="cl">WhatsApp</div><div className="cv"> <a
                                href="https://wa.me/923013493802" target="_blank" className="wa-link" rel="noreferrer">
                                +92 301 349 3802
                            </a></div></div></div>
                            <div className="cc"><div className="ci">🐙</div><div><div className="cl">GitHub</div><div className="cv"> <a href="https://github.com/talhaahmad316" target="_blank" className="wa-link"> github.com/talhaahmad316</a></div></div></div>
                            <div className="cc"><div className="ci">🔗</div><div><div className="cl">LinkedIn</div><div className="cv"><a href="https://www.linkedin.com/in/talha-ahmad-153286150/" target="_blank" className="wa-link">linkedin.com/in/talha-ahmad-153286150</a></div></div></div>

                        </div>

                        {/* RIGHT FORM */}
                        <div
                            className="form rv col-12 col-lg-7"
                            style={{ transitionDelay: ".1s" }}
                        >

                            <div className="fr row">
                                <div className="fg col-12 col-md-6">
                                    <label className="fl">First Name</label>
                                    <input className="fi form-control" type="text" placeholder="John" />
                                </div>

                                <div className="fg col-12 col-md-6">
                                    <label className="fl">Last Name</label>
                                    <input className="fi form-control" type="text" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="fg">
                                <label className="fl">Email</label>
                                <input className="fi form-control" type="email" placeholder="you@company.com" />
                            </div>

                            <div className="fg">
                                <label className="fl">Budget Range</label>
                                <select className="fse form-select">
                                    <option>Select budget…</option>
                                    <option>$500 – $1,500</option>
                                    <option>$1,500 – $5,000</option>
                                    <option>$5,000 – $15,000</option>
                                    <option>$15,000+</option>
                                </select>
                            </div>

                            <div className="fg">
                                <label className="fl">Project Type</label>
                                <input className="fi form-control" type="text" placeholder="e.g. SaaS, E-commerce, Dashboard…" />
                            </div>

                            <div className="fg">
                                <label className="fl">Message</label>
                                <textarea
                                    className="ft form-control"
                                    placeholder="Tell me about your project, timeline, and goals…"
                                ></textarea>
                            </div>

                            <button
                                className="fs btn btn-primary w-100 mt-3"
                                id="send-btn"
                                onClick={(e) => {
                                    e.target.textContent = "✓ Message Sent!";
                                    e.target.classList.add("sent");

                                    setTimeout(() => {
                                        e.target.textContent = "Send Message →";
                                        e.target.classList.remove("sent");
                                    }, 3000);
                                }}
                            >
                                Send Message →
                            </button>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}