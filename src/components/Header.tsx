import { useEffect, useRef } from "react"

const Header = ({ heading }: { heading: string }) => {
    const eyebrowRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const els = [eyebrowRef.current, headingRef.current]
        els.forEach((el, i) => {
            if (!el) return
            el.style.opacity = "0"
            el.style.transform = "translateY(16px)"
            setTimeout(() => {
                el.style.transition = "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)"
                el.style.opacity = "1"
                el.style.transform = "translateY(0)"
            }, i * 120)
        })
    }, [heading])

    return (
        <>
            <style>{`
                .page-header {
                    width: 100%;
                    background: linear-gradient(135deg, #141008 0%, #1c1610 100%);
                    border-bottom: 1px solid rgba(168, 144, 112, 0.15);
                    padding: 48px 2rem 40px;
                    position: relative;
                    overflow: hidden;
                }

                .page-header-mesh {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.1;
                    pointer-events: none;
                }

                .page-header-glow {
                    position: absolute;
                    top: -60px;
                    left: -60px;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    background: rgba(120, 80, 30, 0.2);
                    filter: blur(80px);
                    pointer-events: none;
                }

                .page-header-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1280px;
                    margin: 0 auto;
                }

                .page-header-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 12px;
                }

                .page-header-rule {
                    height: 1px;
                    background: #a89070;
                    transform-origin: left;
                    animation: ruleSlide 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.05s;
                }

                @keyframes ruleSlide {
                    from { width: 0; opacity: 0; }
                    to   { width: 28px; opacity: 1; }
                }

                .page-header-label {
                    font-size: 0.65rem;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #a89070;
                    font-weight: 500;
                }

                .page-header-heading {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: clamp(2rem, 5vw, 3.2rem);
                    font-weight: 900;
                    color: #f5ead8;
                    line-height: 1.1;
                    letter-spacing: -0.01em;
                }

                /* Underline that draws itself under the heading */
                .page-header-underline {
                    margin-top: 14px;
                    height: 1px;
                    background: linear-gradient(90deg, rgba(168,144,112,0.5), transparent);
                    transform-origin: left;
                    animation: underlineDraw 0.9s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.35s;
                }

                @keyframes underlineDraw {
                    from { transform: scaleX(0); opacity: 0; }
                    to   { transform: scaleX(1); opacity: 1; }
                }
            `}</style>

            <div className="page-header">
                <svg className="page-header-mesh" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="header-mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c8a87a" strokeWidth="0.4" />
                        </pattern>
                        <radialGradient id="header-fade" cx="30%" cy="50%" r="60%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                        <mask id="header-mask">
                            <rect width="100%" height="100%" fill="url(#header-fade)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#header-mesh)" mask="url(#header-mask)" />
                </svg>

                <div className="page-header-glow" />

                <div className="page-header-inner">
                    <div className="page-header-eyebrow" ref={eyebrowRef}>
                        <div className="page-header-rule" />
                        <span className="page-header-label">Oyindamola Olofinlua</span>
                    </div>
                    <h1 className="page-header-heading" ref={headingRef}>{heading}</h1>
                    <div className="page-header-underline" />
                </div>
            </div>
        </>
    )
}

export default Header