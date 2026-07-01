import { useEffect, useState } from "react";
import '../assets/css/Preloader.css';

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        const startDelay = 200;
        const totalDuration = 1400;

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

        const exitTimeout = setTimeout(() => setIsExiting(true), 2100);
        const unmountTimeout = setTimeout(() => setIsMounted(false), 2800);

        return () => {
            clearTimeout(delayTimeout);
            clearTimeout(exitTimeout);
            clearTimeout(unmountTimeout);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <div
            className={`preloader ${isExiting ? "preloader--exit" : ""}`}
            id="preloader"
            role="status"
            aria-label="Loading portfolio"
        >
            <div className="pl-depth-grid" aria-hidden="true"></div>
            <div className="pl-aurora pl-aurora--blue" aria-hidden="true"></div>
            <div className="pl-aurora pl-aurora--violet" aria-hidden="true"></div>
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

            <div className="pl-stage" aria-hidden="true">
                <div className="pl-orbit pl-orbit--one">
                    <span></span>
                </div>
                <div className="pl-orbit pl-orbit--two">
                    <span></span>
                </div>
                <div className="pl-orbit pl-orbit--three">
                    <span></span>
                </div>

                <div className="pl-halo pl-halo--back"></div>
                <div className="pl-cube">
                    <div className="pl-cube-face pl-cube-face--front">T</div>
                    <div className="pl-cube-face pl-cube-face--back">A</div>
                    <div className="pl-cube-face pl-cube-face--right"></div>
                    <div className="pl-cube-face pl-cube-face--left"></div>
                    <div className="pl-cube-face pl-cube-face--top"></div>
                    <div className="pl-cube-face pl-cube-face--bottom"></div>
                </div>
                <div className="pl-halo pl-halo--front"></div>
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
