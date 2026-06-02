import '../assets/css/Contact.css';
import { useState } from 'react';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ENDPOINT) {
      const name = `${data.get('firstName') || ''} ${data.get('lastName') || ''}`.trim();
      const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Website Visitor'}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${data.get('email')}\nBudget: ${data.get('budget')}\nProject Type: ${data.get('projectType')}\n\n${data.get('message')}`
      );
      window.location.href = `mailto:talhaahmad316@gmail.com?subject=${subject}&body=${body}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setStatus('sent');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-sec">
      <div className="container py-5">
        <div className="rv text-center mb-5">
          <div className="eyebrow">Contact</div>
          <h2 className="sec-title">Let's Build Together</h2>
          <p className="sec-sub">Have a project idea or a collaboration in mind? Send the details and I will get back to you.</p>
        </div>

        <div className="cg">
          <div className="cc-list rv">
            <a className="cc" href="mailto:talhaahmad316@gmail.com">
              <div className="ci">@</div><div><div className="cl">Email</div><div className="cv">talhaahmad316@gmail.com</div></div>
            </a>
            <a className="cc" href="https://github.com/talhaahmad316" target="_blank" rel="noreferrer">
              <div className="ci">gh</div><div><div className="cl">GitHub</div><div className="cv">github.com/talhaahmad316</div></div>
            </a>
            <a className="cc" href="https://www.linkedin.com/in/talha-ahmad-153286150/" target="_blank" rel="noreferrer">
              <div className="ci">in</div><div><div className="cl">LinkedIn</div><div className="cv">linkedin.com/in/talha-ahmad</div></div>
            </a>
            <a className="cc" href="https://wa.me/923013493802" target="_blank" rel="noreferrer">
              <div className="ci">wa</div><div><div className="cl">WhatsApp</div><div className="cv">+92 301 349 3802</div></div>
            </a>
          </div>

          <form className="form rv" onSubmit={handleSubmit} style={{ transitionDelay: '.1s' }}>
            <div className="fr">
              <div className="fg">
                <label className="fl" htmlFor="firstName">First Name</label>
                <input className="fi" id="firstName" name="firstName" type="text" placeholder="John" required />
              </div>
              <div className="fg">
                <label className="fl" htmlFor="lastName">Last Name</label>
                <input className="fi" id="lastName" name="lastName" type="text" placeholder="Doe" />
              </div>
            </div>

            <div className="fg">
              <label className="fl" htmlFor="email">Email</label>
              <input className="fi" id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>

            <div className="fg">
              <label className="fl" htmlFor="budget">Budget Range</label>
              <select className="fse" id="budget" name="budget" defaultValue="">
                <option value="" disabled>Select budget...</option>
                <option>$500 - $1,500</option>
                <option>$1,500 - $5,000</option>
                <option>$5,000 - $15,000</option>
                <option>$15,000+</option>
              </select>
            </div>

            <div className="fg">
              <label className="fl" htmlFor="projectType">Project Type</label>
              <input className="fi" id="projectType" name="projectType" type="text" placeholder="SaaS, e-commerce, dashboard..." />
            </div>

            <div className="fg">
              <label className="fl" htmlFor="message">Message</label>
              <textarea className="ft" id="message" name="message" placeholder="Tell me about your project, timeline, and goals..." required></textarea>
            </div>

            <button className={`fs ${status === 'sent' ? 'sent' : ''}`} type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Ready' : 'Send Message'}
            </button>
            {status === 'error' && <p className="form-note error">Something went wrong. Please email me directly.</p>}
            {!FORMSPREE_ENDPOINT && <p className="form-note">Tip: add VITE_FORMSPREE_ENDPOINT to use Formspree. Until then, this opens your email app.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
