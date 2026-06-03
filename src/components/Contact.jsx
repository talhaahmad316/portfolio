import { useState } from 'react';
import '../assets/css/Contact.css';
import SocialIcon from './SocialIcon';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

export default function Contact({ t }) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!FORMSPREE_ENDPOINT) {
      const name = `${data.get('firstName') || ''} ${data.get('lastName') || ''}`.trim();
      const subject = encodeURIComponent(`${t.mailSubject} ${name || t.visitor}`);
      const body = encodeURIComponent(
        `${t.mailFields.name}: ${name}\n${t.mailFields.email}: ${data.get('email')}\n${t.mailFields.budget}: ${data.get('budget')}\n${t.mailFields.projectType}: ${data.get('projectType')}\n\n${data.get('message')}`
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
          <div className="eyebrow">{t.eyebrow}</div>
          <h2 className="sec-title">{t.title}</h2>
          <p className="sec-sub">{t.subtitle}</p>
        </div>

        <div className="cg">
          <div className="cc-list rv">
            <a className="cc" href="mailto:talhaahmad316@gmail.com">
              <div className="ci"><SocialIcon name="email" /></div><div><div className="cl">{t.email}</div><div className="cv">talhaahmad316@gmail.com</div></div>
            </a>
            <a className="cc" href="https://github.com/talhaahmad316" target="_blank" rel="noreferrer">
              <div className="ci"><SocialIcon name="github" /></div><div><div className="cl">GitHub</div><div className="cv">github.com/talhaahmad316</div></div>
            </a>
            <a className="cc" href="https://www.linkedin.com/in/talha-ahmad-153286150/" target="_blank" rel="noreferrer">
              <div className="ci"><SocialIcon name="linkedin" /></div><div><div className="cl">LinkedIn</div><div className="cv">linkedin.com/in/talha-ahmad</div></div>
            </a>
            <a className="cc" href="https://wa.me/923013493802" target="_blank" rel="noreferrer">
              <div className="ci"><SocialIcon name="whatsapp" /></div><div><div className="cl">WhatsApp</div><div className="cv">+92 301 349 3802</div></div>
            </a>
          </div>

          <form className="form rv" onSubmit={handleSubmit} style={{ transitionDelay: '.1s' }}>
            <div className="fr">
              <div className="fg">
                <label className="fl" htmlFor="firstName">{t.firstName}</label>
                <input className="fi" id="firstName" name="firstName" type="text" placeholder={t.placeholders.firstName} required />
              </div>
              <div className="fg">
                <label className="fl" htmlFor="lastName">{t.lastName}</label>
                <input className="fi" id="lastName" name="lastName" type="text" placeholder={t.placeholders.lastName} />
              </div>
            </div>

            <div className="fg">
              <label className="fl" htmlFor="email">{t.email}</label>
              <input className="fi" id="email" name="email" type="email" placeholder={t.placeholders.email} required />
            </div>

            <div className="fg">
              <label className="fl" htmlFor="budget">{t.budget}</label>
              <select className="fse" id="budget" name="budget" defaultValue="">
                <option value="" disabled>{t.selectBudget}</option>
                <option>$500 - $1,500</option>
                <option>$1,500 - $5,000</option>
                <option>$5,000 - $15,000</option>
                <option>$15,000+</option>
              </select>
            </div>

            <div className="fg">
              <label className="fl" htmlFor="projectType">{t.projectType}</label>
              <input className="fi" id="projectType" name="projectType" type="text" placeholder={t.placeholders.projectType} />
            </div>

            <div className="fg">
              <label className="fl" htmlFor="message">{t.message}</label>
              <textarea className="ft" id="message" name="message" placeholder={t.placeholders.message} required></textarea>
            </div>

            <button className={`fs ${status === 'sent' ? 'sent' : ''}`} type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? t.sending : status === 'sent' ? t.sent : t.send}
            </button>
            {status === 'error' && <p className="form-note error">{t.error}</p>}
            {!FORMSPREE_ENDPOINT && <p className="form-note">{t.tip}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
