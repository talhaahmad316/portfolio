import { useEffect, useState } from "react";
import '../assets/Preloader.css'

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const startDelay = 200;
        const totalDuration = 500;

        let animationFrame;

        const delayTimeout = setTimeout(() => {
            const startTime = Date.now();

            const tick = () => {
                const p = Math.min(
                    (Date.now() - startTime) / totalDuration,
                    1
                );

                setProgress(Math.round(p * 100));

                if (p < 1) {
                    animationFrame = requestAnimationFrame(tick);
                }
            };

            animationFrame = requestAnimationFrame(tick);
        }, startDelay);

        const exitTimeout = setTimeout(() => {
            setHide(true);
        }, 3800);

        return () => {
            clearTimeout(delayTimeout);
            clearTimeout(exitTimeout);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    if (hide) return null;

    return (
        <div
            className={`preloader ${hide ? "preloader--exit" : ""}`}
            id="preloader"
            role="status"
            aria-label="Loading portfolio"
        >
            <div className="pl-grid" aria-hidden="true"></div>
            <div className="pl-scanline" aria-hidden="true"></div>

            <div
                className="pl-corner pl-corner--tl"
                aria-hidden="true"
            ></div>
            <div
                className="pl-corner pl-corner--tr"
                aria-hidden="true"
            ></div>
            <div
                className="pl-corner pl-corner--bl"
                aria-hidden="true"
            ></div>
            <div
                className="pl-corner pl-corner--br"
                aria-hidden="true"
            ></div>

            <div className="pl-ring-wrap" aria-hidden="true">
                <div className="pl-ring pl-ring--outer"></div>
                <div className="pl-ring pl-ring--inner"></div>

                <div className="pl-image">
                    <img src="/talhamini.PNG" alt="Talha Ahmad" />
                </div>
            </div>

            <div className="pl-name-block">
                <h1 className="pl-name">Talha Ahmad</h1>
            </div>

            <div className="pl-role" aria-hidden="true">
                <span className="pl-role-line"></span>
                Full Stack Developer
                <span className="pl-role-line"></span>
            </div>

            <div className="pl-progress-wrap" id="pl-progress">
                <div className="pl-progress-track">
                    <div
                        className="pl-progress-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className="pl-progress-row">
                    <span className="pl-progress-label">
                        Loading
                    </span>

                    <span className="pl-progress-pct">
                        {progress}%
                    </span>
                </div>
            </div>

            <div className="pl-dots" aria-hidden="true">
                <div className="pl-dot pl-dot--1"></div>
                <div className="pl-dot pl-dot--2"></div>
                <div className="pl-dot pl-dot--3"></div>
            </div>
        </div>
    );
}