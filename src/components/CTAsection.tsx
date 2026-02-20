import { useEffect, useRef, useState } from "react"

const CTASection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [triggered, setTriggered] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
            { threshold: 0.3 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
                .cta-section {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(135deg, #0e0c08 0%, #1c1610 100%);
                    padding: 56px 2rem;
                }

                .cta-glow {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px; height: 200px;
                    border-radius: 50%;
                    background: rgba(120, 80, 30, 0.18);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 0;
                }

                .cta-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1280px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 40px;
                    flex-wrap: wrap;
                }

                .cta-text { flex: 1; min-width: 260px; }

                .cta-eyebrow {
                    font-size: 0.62rem;
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: #a89070;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 10px;
                    opacity: 0;
                }
                .cta-eyebrow.animate {
                    animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.05s;
                }
                .cta-eyebrow-rule {
                    width: 20px; height: 1px;
                    background: #a89070;
                }

                .cta-headline {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 900;
                    color: #f5ead8;
                    line-height: 1.15;
                    margin-bottom: 8px;
                    opacity: 0;
                }
                .cta-headline.animate {
                    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.12s;
                }
                .cta-headline em { font-style: italic; color: #a89070; }

                .cta-sub {
                    font-size: 0.88rem;
                    color: #7a6a58;
                    line-height: 1.7;
                    max-width: 480px;
                    opacity: 0;
                }
                .cta-sub.animate {
                    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.22s;
                }

                .cta-buttons {
                    display: flex;
                    gap: 12px;
                    flex-shrink: 0;
                    flex-wrap: wrap;
                    opacity: 0;
                }
                .cta-buttons.animate {
                    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.32s;
                }

                .cta-btn-primary {
                    display: inline-block;
                    background: #e8d9c0;
                    color: #1a1208;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 13px 28px;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s;
                    white-space: nowrap;
                }
                .cta-btn-primary:hover { background: #f5ead8; }
                .cta-btn-primary:active { transform: scale(0.96); }

                .cta-btn-ghost {
                    display: inline-block;
                    border: 1px solid rgba(232,217,192,0.3);
                    color: #e8d9c0;
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 13px 28px;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: background 0.2s, border-color 0.2s, transform 0.15s;
                    white-space: nowrap;
                }
                .cta-btn-ghost:hover {
                    background: rgba(232,217,192,0.08);
                    border-color: rgba(232,217,192,0.6);
                }
                .cta-btn-ghost:active { transform: scale(0.96); }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                /* Thin top & bottom borders */
                .cta-section::before, .cta-section::after {
                    content: '';
                    position: absolute;
                    left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(168,144,112,0.2), transparent);
                    z-index: 1;
                }
                .cta-section::before { top: 0; }
                .cta-section::after  { bottom: 0; }

                @media (max-width: 640px) {
                    .cta-section { padding: 44px 1.25rem; }
                    .cta-inner { flex-direction: column; align-items: flex-start; gap: 24px; }
                    .cta-buttons { width: 100%; }
                    .cta-btn-primary, .cta-btn-ghost { flex: 1; text-align: center; }
                }
            `}</style>

            <section className="cta-section" ref={sectionRef}>
                <div className="cta-glow" />

                <div className="cta-inner">
                    <div className="cta-text">
                        <div className={`cta-eyebrow ${triggered ? 'animate' : ''}`}>
                            <div className="cta-eyebrow-rule" />
                            Let's work together
                        </div>
                        <h2 className={`cta-headline ${triggered ? 'animate' : ''}`}>
                            Seen enough? Let's <em>talk.</em>
                        </h2>
                        <p className={`cta-sub ${triggered ? 'animate' : ''}`}>
                            Browse my previous work or reach out directly — every great project starts with a conversation.
                        </p>
                    </div>

                    <div className={`cta-buttons ${triggered ? 'animate' : ''}`}>
                        <a href="/works" className="cta-btn-primary">My Works</a>
                        <a href="/contact" className="cta-btn-ghost">Contact Me</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTASection