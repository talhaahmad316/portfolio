import { useState, useRef, useCallback } from 'react';
import '../assets/css/Contact.css';
import SocialIcon from './SocialIcon';
import Swal from 'sweetalert2';

const API_URL = 'https://mycargomanager.com/workstation_backend/api/contact/send/mail';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16"/>
      <line x1="12" y1="12" x2="12" y2="21"/>
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function isImage(file) {
  return file.type.startsWith('image/');
}

export default function Contact({ t }) {
  const [status, setStatus]       = useState('idle');
  const [attachedFile, setAttachedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive]     = useState(false);
  const fileInputRef = useRef(null);

  // ─── File handling ─────────────────────────────────────────────
  const applyFile = useCallback((file) => {
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) {
      Swal.fire({
        icon: 'warning',
        title: 'File Too Large',
        text: 'Maximum file size is 10 MB.',
        confirmButtonColor: '#e2b96f',
        background: '#1a1a2e',
        color: '#ffffff',
      });
      return;
    }
    setAttachedFile(file);
    if (isImage(file)) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }, []);

  const removeFile = () => {
    setAttachedFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDragOver = (e) => { e.preventDefault(); setDragActive(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setDragActive(false); };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) applyFile(file);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) applyFile(file);
  };

  // ─── Submit ────────────────────────────────────────────────────
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const firstName   = data.get('firstName')?.trim();
    const lastName    = data.get('lastName')?.trim();
    const email       = data.get('email')?.trim();
    const projectType = data.get('projectType')?.trim();
    const message     = data.get('message')?.trim();

    if (!firstName) {
      Swal.fire({ icon: 'warning', title: 'First Name Required', text: 'Please enter your first name.', confirmButtonColor: '#e2b96f', background: '#1a1a2e', color: '#ffffff' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      Swal.fire({ icon: 'warning', title: 'Invalid Email', text: 'Please enter a valid email address.', confirmButtonColor: '#e2b96f', background: '#1a1a2e', color: '#ffffff' });
      return;
    }
    if (!message) {
      Swal.fire({ icon: 'warning', title: 'Message Required', text: 'Please write a message before sending.', confirmButtonColor: '#e2b96f', background: '#1a1a2e', color: '#ffffff' });
      return;
    }

    setStatus('sending');

    try {
      // Use FormData to support file upload
      const payload = new FormData();
      payload.append('firstName', firstName);
      payload.append('lastName', lastName ?? '');
      payload.append('email', email);
      payload.append('projectType', projectType ?? '');
      payload.append('message', message);
      if (attachedFile) payload.append('attachment', attachedFile);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        // Do NOT set Content-Type manually — browser sets multipart boundary automatically
        body: payload,
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 422 && result.errors) {
          const errorMessages = Object.values(result.errors).flat().join('<br/>');
          Swal.fire({ icon: 'error', title: 'Validation Error', html: errorMessages, confirmButtonColor: '#e2b96f', background: '#1a1a2e', color: '#ffffff' });
        } else {
          throw new Error(result.message || 'Something went wrong');
        }
        setStatus('idle');
        return;
      }

      form.reset();
      removeFile();
      setStatus('sent');

      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        html: `<p style="color:rgba(255,255,255,0.75);font-size:14px;margin:0;">Thanks <strong style="color:#e2b96f;">${firstName}</strong>, I'll get back to you shortly.</p>`,
        confirmButtonColor: '#e2b96f',
        background: '#1a1a2e',
        color: '#ffffff',
        timer: 4000,
        timerProgressBar: true,
      });

    } catch (error) {
      setStatus('error');
      Swal.fire({ icon: 'error', title: 'Failed to Send', text: error.message || 'Something went wrong. Please try again or reach out via email.', confirmButtonColor: '#e2b96f', background: '#1a1a2e', color: '#ffffff' });
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
              <div className="ci"><SocialIcon name="email" /></div>
              <div><div className="cl">{t.email}</div><div className="cv">talhaahmad316@gmail.com</div></div>
            </a>
            <a className="cc" href="https://github.com/talhaahmad316" target="_blank" rel="noreferrer">
              <div className="ci"><SocialIcon name="github" /></div>
              <div><div className="cl">GitHub</div><div className="cv">github.com/talhaahmad316</div></div>
            </a>
            <a className="cc" href="https://www.linkedin.com/in/talha-ahmad-153286150/" target="_blank" rel="noreferrer">
              <div className="ci"><SocialIcon name="linkedin" /></div>
              <div><div className="cl">LinkedIn</div><div className="cv">linkedin.com/in/talha-ahmad</div></div>
            </a>
            <a className="cc" href="https://wa.me/923013493802" target="_blank" rel="noreferrer">
              <div className="ci"><SocialIcon name="whatsapp" /></div>
              <div><div className="cl">WhatsApp</div><div className="cv">+92 301 349 3802</div></div>
            </a>
          </div>

          <form className="form rv" onSubmit={handleSubmit} style={{ transitionDelay: '.1s' }}>
            <div className="fr">
              <div className="fg">
                <label className="fl" htmlFor="firstName">{t.firstName}</label>
                <input className="fi" id="firstName" name="firstName" type="text" placeholder={t.placeholders.firstName} />
              </div>
              <div className="fg">
                <label className="fl" htmlFor="lastName">{t.lastName}</label>
                <input className="fi" id="lastName" name="lastName" type="text" placeholder={t.placeholders.lastName} />
              </div>
            </div>

            <div className="fg">
              <label className="fl" htmlFor="email">{t.email}</label>
              <input className="fi" id="email" name="email" type="email" placeholder={t.placeholders.email} />
            </div>

            <div className="fg">
              <label className="fl" htmlFor="projectType">{t.projectType}</label>
              <input className="fi" id="projectType" name="projectType" type="text" placeholder={t.placeholders.projectType} />
            </div>

            {/* ─── File Attachment ─────────────────────────────────── */}
            <div className="fg">
              <label className="fl">Attachment <span className="fa-optional">(optional · max 10 MB)</span></label>

              {!attachedFile ? (
                <div
                  className={`fa-dropzone${dragActive ? ' fa-drag-over' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
                  aria-label="File upload area"
                >
                  <div className="fa-upload-icon">
                    <UploadIcon />
                  </div>
                  <p className="fa-drop-title">
                    {dragActive ? 'Release to attach' : 'Drag & drop your file here'}
                  </p>
                  <p className="fa-drop-sub">or <span className="fa-browse">browse</span> to choose</p>
                  <p className="fa-drop-hint">Any file type accepted — images, PDFs, docs, zip…</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="fa-hidden-input"
                    onChange={handleFileChange}
                    aria-hidden="true"
                    tabIndex={-1}
                  />
                </div>
              ) : (
                <div className="fa-preview-card">
                  {imagePreview ? (
                    <div className="fa-img-wrap">
                      <img src={imagePreview} alt="Preview" className="fa-img-preview" />
                      <div className="fa-img-overlay">
                        <CheckIcon />
                      </div>
                    </div>
                  ) : (
                    <div className="fa-file-icon-wrap">
                      <FileIcon />
                    </div>
                  )}

                  <div className="fa-file-meta">
                    <p className="fa-file-name">{attachedFile.name}</p>
                    <p className="fa-file-size">{formatBytes(attachedFile.size)}</p>
                    <p className="fa-file-type">{attachedFile.type || 'Unknown type'}</p>
                  </div>

                  <button
                    type="button"
                    className="fa-remove-btn"
                    onClick={removeFile}
                    aria-label="Remove attachment"
                  >
                    <XIcon />
                  </button>
                </div>
              )}
            </div>
            {/* ─────────────────────────────────────────────────────── */}

            <div className="fg">
              <label className="fl" htmlFor="message">{t.message}</label>
              <textarea className="ft" id="message" name="message" placeholder={t.placeholders.message}></textarea>
            </div>

            <button
              className={`fs ${status === 'sent' ? 'sent' : ''}`}
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? t.sending : status === 'sent' ? t.sent : t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}