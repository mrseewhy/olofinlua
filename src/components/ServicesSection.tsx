import { useEffect, useRef, useState } from "react"

const services = [
    {
        icon: "✍️",
        title: "Writing",
        description: "Compelling narratives, web copy, thought leadership, and campaign content crafted with precision and purpose.",
    },
    {
        icon: "📝",
        title: "Editing",
        description: "Award-winning editorial expertise across fiction, non-fiction, and corporate content — sharpening every word.",
    },
    {
        icon: "📣",
        title: "Publicist",
        description: "Strategic media relations and brand positioning that build visibility and amplify your story to the right audiences.",
    },
    {
        icon: "📊",
        title: "Marketing Strategy",
        description: "Data-informed communications strategy that drives measurable growth across digital, print, and live platforms.",
    },
]

const ServicesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [triggered, setTriggered] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
            { threshold: 0.2 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
                .services-section {
                    width: 100%;
                    background: #f5ead8;
                    padding: 88px 2rem;
                    position: relative;
                    overflow: hidden;
                }

                /* Subtle mesh overlay */
                .services-mesh {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.07;
                    pointer-events: none;
                    z-index: 0;
                }

                /* Ambient glow top right */
                .services-glow {
                    position: absolute;
                    top: -80px;
                    right: -80px;
                    width: 400px;
                    height: 400px;
                    border-radius: 50%;
                    background: rgba(168, 130, 80, 0.18);
                    filter: blur(100px);
                    pointer-events: none;
                    z-index: 0;
                }
                .services-glow-2 {
                    position: absolute;
                    bottom: -60px;
                    left: -60px;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    background: rgba(168, 144, 112, 0.12);
                    filter: blur(80px);
                    pointer-events: none;
                    z-index: 0;
                }

                .services-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1280px;
                    margin: 0 auto;
                }

                /* ── HEADER ── */
                .services-header {
                    text-align: center;
                    margin-bottom: 56px;
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes ruleGrow {
                    from { width: 0; }
                    to   { width: 40px; }
                }
                @keyframes cardIn {
                    from { opacity: 0; transform: translateY(32px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .services-eyebrow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    margin-bottom: 14px;
                    opacity: 0;
                }
                .services-eyebrow.animate {
                    animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.05s;
                }
                .services-eyebrow-rule {
                    height: 1px;
                    background: #a89070;
                    width: 0;
                }
                .services-eyebrow-rule.animate {
                    animation: ruleGrow 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.1s;
                }
                .services-eyebrow-label {
                    font-size: 0.65rem;
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: #a89070;
                    font-weight: 500;
                }

                .services-heading {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: clamp(1.9rem, 3.5vw, 2.8rem);
                    font-weight: 900;
                    color: #1a1208;
                    line-height: 1.1;
                    margin-bottom: 14px;
                    opacity: 0;
                }
                .services-heading.animate {
                    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.15s;
                }
                .services-heading em { font-style: italic; color: #a89070; }

                .services-subheading {
                    font-size: 0.92rem;
                    color: #7a6a58;
                    max-width: 480px;
                    margin: 0 auto;
                    line-height: 1.75;
                    opacity: 0;
                }
                .services-subheading.animate {
                    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.25s;
                }

                /* ── CARDS GRID ── */
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                }

                @media (max-width: 1024px) {
                    .services-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 560px) {
                    .services-grid { grid-template-columns: 1fr; }
                    .services-section { padding: 64px 1.25rem; }
                }

                .service-card {
                    background: rgba(255, 252, 245, 0.7);
                    border: 1px solid rgba(168, 144, 112, 0.2);
                    border-radius: 16px;
                    padding: 32px 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    opacity: 0;
                    transition: transform 0.25s cubic-bezier(0.16,1,0.3,1),
                                box-shadow 0.25s ease,
                                border-color 0.25s ease,
                                background 0.25s ease;
                    cursor: default;
                    position: relative;
                    overflow: hidden;
                }
                .service-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #a89070, transparent);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .service-card:hover::before { opacity: 1; }

                .service-card.animate {
                    animation: cardIn 0.65s cubic-bezier(0.16,1,0.3,1) both;
                }
                .service-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 48px rgba(168, 144, 112, 0.18);
                    border-color: rgba(168, 144, 112, 0.45);
                    background: rgba(255, 252, 245, 0.95);
                }

                .service-icon-wrap {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: rgba(168, 144, 112, 0.12);
                    border: 1px solid rgba(168, 144, 112, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.3rem;
                    transition: background 0.25s, transform 0.25s;
                }
                .service-card:hover .service-icon-wrap {
                    background: rgba(168, 144, 112, 0.2);
                    transform: scale(1.08);
                }

                .service-title {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #1a1208;
                    line-height: 1.2;
                }

                .service-desc {
                    font-size: 0.85rem;
                    color: #7a6a58;
                    line-height: 1.75;
                    flex: 1;
                }

                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #a89070;
                    text-decoration: none;
                    margin-top: 4px;
                    transition: color 0.2s, gap 0.2s;
                }
                .service-link:hover { color: #1a1208; gap: 10px; }
                .service-link::after { content: '→'; }

                /* ── BOTTOM CTA ── */
                .services-footer {
                    text-align: center;
                    margin-top: 52px;
                    opacity: 0;
                }
                .services-footer.animate {
                    animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.6s;
                }
                .services-cta {
                    display: inline-block;
                    background: #1a1208;
                    color: #e8d9c0;
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 14px 36px;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s;
                }
                .services-cta:hover  { background: #2c2010; }
                .services-cta:active { transform: scale(0.96); }
            `}</style>

            <section className="services-section" ref={sectionRef}>
                {/* Mesh */}
                <svg className="services-mesh" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="svc-mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a89070" strokeWidth="0.5" />
                        </pattern>
                        <radialGradient id="svc-fade" cx="50%" cy="50%" r="60%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                        <mask id="svc-mask">
                            <rect width="100%" height="100%" fill="url(#svc-fade)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#svc-mesh)" mask="url(#svc-mask)" />
                </svg>

                <div className="services-glow" />
                <div className="services-glow-2" />

                <div className="services-inner">

                    {/* Header */}
                    <div className="services-header">
                        <div className={`services-eyebrow ${triggered ? 'animate' : ''}`}>
                            <div className={`services-eyebrow-rule ${triggered ? 'animate' : ''}`} />
                            <span className="services-eyebrow-label">What I Do</span>
                            <div className={`services-eyebrow-rule ${triggered ? 'animate' : ''}`} />
                        </div>
                        <h2 className={`services-heading ${triggered ? 'animate' : ''}`}>
                            My <em>Services</em>
                        </h2>
                        <p className={`services-subheading ${triggered ? 'animate' : ''}`}>
                            Language is my craft — every service I offer is built on the belief
                            that the right words in the right place change everything.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="services-grid">
                        {services.map((s, i) => (
                            <div
                                key={s.title}
                                className={`service-card ${triggered ? 'animate' : ''}`}
                                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                            >
                                <div className="service-icon-wrap">{s.icon}</div>
                                <div className="service-title">{s.title}</div>
                                <p className="service-desc">{s.description}</p>
                                <a href="/works" className="service-link">Learn more</a>
                            </div>
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <div className={`services-footer ${triggered ? 'animate' : ''}`}>
                        <a href="/contact" className="services-cta">Work With Me</a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ServicesSection