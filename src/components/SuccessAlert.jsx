import { useEffect, useState } from 'react';
import '../assets/css/SuccessAlert.css';

function PaperclipIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

/**
 * hasAttachment: boolean — controls which variant/copy is shown
 * onClose:       () => void
 */
export default function SuccessAlert({ hasAttachment, onClose }) {
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        setTimeout(onClose, 320); // matches exit animation duration
    };

    // No auto-dismiss — closes only via OK button, X button, Escape, or backdrop click
    useEffect(() => {
        const autoTimer = setTimeout(handleClose, 6000);
        const escHandler = (e) => e.key === 'Escape' && handleClose();
        window.addEventListener('keydown', escHandler);
        return () => {
            clearTimeout(autoTimer);
            window.removeEventListener('keydown', escHandler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`sa-overlay ${closing ? 'sa-overlay-out' : ''}`} onClick={handleClose}>
            <div
                className={`sa-scene ${closing ? 'sa-card-out' : ''}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Message sent confirmation"
            >
                <div className="sa-card">
                    <div className="sa-glow" />
                    <span className="sa-spark sa-spark-1" />
                    <span className="sa-spark sa-spark-2" />
                    <span className="sa-spark sa-spark-3" />
                    <span className="sa-spark sa-spark-4" />

                    <button className="sa-x-btn" onClick={handleClose} aria-label="Close">
                        <XIcon />
                    </button>

                    <div className="sa-icon-wrap">
                        <span className="sa-icon-ring" />
                        <span className="sa-icon-ring sa-icon-ring-2" />
                        <svg className="sa-check-svg" viewBox="0 0 52 52">
                            <circle className="sa-check-circle" cx="26" cy="26" r="23" fill="none" />
                            <path className="sa-check-mark" fill="none" d="M14 27l7 7 17-17" />
                        </svg>
                    </div>

                    <h3 className="sa-title">Message Sent</h3>
                    <p className="sa-sub">
                        {hasAttachment
                            ? 'Your message and attachment are on their way.'
                            : 'Your message is on its way.'}
                    </p>

                    {hasAttachment && (
                        <div className="sa-attach-badge">
                            <PaperclipIcon />
                            <span>Attachment included</span>
                        </div>
                    )}

                    <button className="sa-close-btn" onClick={handleClose}>Done</button>
                </div>
            </div>
        </div>
    );
}