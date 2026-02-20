import { useEffect, useRef, useState } from "react"

const contactDetails = [
    {
        icon: "✉️",
        label: "Email",
        value: "hello@olofinlua.com",
        href: "mailto:hello@olofinlua.com",
    },
    {
        icon: "🐦",
        label: "Twitter / X",
        value: "@olofinlua",
        href: "https://twitter.com/olofinlua",
    },
    {
        icon: "💼",
        label: "LinkedIn",
        value: "Oyindamola Olofinlua",
        href: "https://linkedin.com/in/olofinlua",
    },
    {
        icon: "📍",
        label: "Location",
        value: "Lagos, Nigeria",
        href: null,
    },
]

const ContactSection = () => {
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
                .contact-section {
                    width: 100%;
                    background: linear-gradient(160deg, #141008 0%, #1c1610 60%, #100e14 100%);
                    padding: 96px 2rem;
                    position: relative;
                    overflow: hidden;
                }
                @media (max-width: 640px) { .contact-section { padding: 72px 1.25rem; } }

                /* Mesh */
                .contact-mesh {
                    position: absolute;
                    inset: 0; width: 100%; height: 100%;
                    opacity: 0.1; pointer-events: none; z-index: 0;
                }

                /* Glows */
                .contact-glow-1 {
                    position: absolute; top: -60px; left: -60px;
                    width: 440px; height: 440px; border-radius: 50%;
                    background: rgba(120,80,30,0.2); filter: blur(110px);
                    pointer-events: none; z-index: 0;
                }
                .contact-glow-2 {
                    position: absolute; bottom: -60px; right: 20%;
                    width: 360px; height: 360px; border-radius: 50%;
                    background: rgba(80,50,120,0.12); filter: blur(90px);
                    pointer-events: none; z-index: 0;
                }

                /* Bottom border */
                .contact-section::after {
                    content: '';
                    position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(168,144,112,0.2), transparent);
                    z-index: 1;
                }

                .contact-inner {
                    position: relative; z-index: 1;
                    max-width: 1280px; margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }
                @media (max-width: 860px) {
                    .contact-inner { grid-template-columns: 1fr; gap: 48px; }
                    .contact-image-col { order: 2; }
                    .contact-text-col  { order: 1; }
                }

                /* ── ANIMATIONS ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(22px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes ruleGrow {
                    from { width: 0; }
                    to   { width: 28px; }
                }

                /* ── IMAGE COLUMN ── */
                .contact-image-col {
                    position: relative;
                    opacity: 0;
                }
                .contact-image-col.animate {
                    animation: fadeIn 1s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.1s;
                }

                .contact-img-wrap {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    aspect-ratio: 4/5;
                    max-height: 520px;
                }
                .contact-img-wrap img {
                    width: 100%; height: 100%;
                    object-fit: cover;
                    object-position: top center;
                    display: block;
                    transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
                }
                .contact-img-wrap:hover img { transform: scale(1.03); }

                /* Amber border overlay on image */
                .contact-img-wrap::after {
                    content: '';
                    position: absolute; inset: 0;
                    border-radius: 20px;
                    border: 1px solid rgba(168,144,112,0.2);
                    pointer-events: none;
                }

                /* Glow behind image */
                .contact-img-glow {
                    position: absolute;
                    bottom: -30px; left: 50%;
                    transform: translateX(-50%);
                    width: 80%; height: 60%;
                    border-radius: 50%;
                    background: radial-gradient(ellipse, rgba(168,130,80,0.3) 0%, transparent 70%);
                    filter: blur(40px);
                    pointer-events: none;
                    z-index: -1;
                }

                /* Floating badge */
                .contact-img-badge {
                    position: absolute;
                    bottom: 24px; left: -20px;
                    background: rgba(20,16,8,0.85);
                    backdrop-filter: blur(14px);
                    border: 1px solid rgba(168,144,112,0.25);
                    border-radius: 14px;
                    padding: 14px 20px;
                    z-index: 2;
                }
                @media (max-width: 860px) { .contact-img-badge { left: 16px; } }

                .contact-img-badge-label {
                    font-size: 0.58rem;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: #7a6a58;
                    margin-bottom: 3px;
                }
                .contact-img-badge-value {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #e8d9c0;
                }

                /* Decorative rings */
                .contact-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1px solid rgba(168,144,112,0.1);
                    pointer-events: none;
                }
                .contact-ring-1 { width: 140px; height: 140px; top: -30px; right: -30px; }
                .contact-ring-2 { width: 200px; height: 200px; top: -60px; right: -60px;
                                  border-color: rgba(168,144,112,0.06); }

                /* ── TEXT COLUMN ── */
                .contact-text-col {}

                .contact-eyebrow {
                    display: flex; align-items: center; gap: 10px;
                    margin-bottom: 14px; opacity: 0;
                }
                .contact-eyebrow.animate {
                    animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.05s;
                }
                .contact-eyebrow-rule {
                    height: 1px; background: #a89070; width: 0;
                }
                .contact-eyebrow-rule.animate {
                    animation: ruleGrow 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.1s;
                }
                .contact-eyebrow-label {
                    font-size: 0.65rem; letter-spacing: 0.22em;
                    text-transform: uppercase; color: #a89070; font-weight: 500;
                }

                .contact-heading {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: clamp(2rem, 3.5vw, 2.8rem);
                    font-weight: 900;
                    color: #f5ead8;
                    line-height: 1.1;
                    margin-bottom: 16px;
                    opacity: 0;
                }
                .contact-heading.animate {
                    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.15s;
                }
                .contact-heading em { font-style: italic; color: #a89070; }

                .contact-body {
                    font-size: 0.92rem;
                    color: #7a6a58;
                    line-height: 1.85;
                    margin-bottom: 36px;
                    max-width: 420px;
                    opacity: 0;
                }
                .contact-body.animate {
                    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.25s;
                }

                /* Contact detail items */
                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-bottom: 36px;
                }

                .contact-detail-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 18px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(168,144,112,0.12);
                    border-radius: 12px;
                    text-decoration: none;
                    opacity: 0;
                    transition: background 0.2s, border-color 0.2s, transform 0.2s;
                }
                .contact-detail-item.animate {
                    animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
                }
                .contact-detail-item[href]:hover {
                    background: rgba(168,144,112,0.07);
                    border-color: rgba(168,144,112,0.3);
                    transform: translateX(4px);
                }

                .contact-detail-icon {
                    width: 38px; height: 38px;
                    border-radius: 10px;
                    background: rgba(168,144,112,0.1);
                    border: 1px solid rgba(168,144,112,0.15);
                    display: flex; align-items: center; justify-content: center;
                    font-size: 1rem;
                    flex-shrink: 0;
                }

                .contact-detail-text { flex: 1; }
                .contact-detail-label {
                    font-size: 0.6rem;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: #5a4e42;
                    margin-bottom: 2px;
                }
                .contact-detail-value {
                    font-size: 0.88rem;
                    font-weight: 500;
                    color: #e8d9c0;
                }

                .contact-detail-arrow {
                    font-size: 0.8rem;
                    color: #5a4e42;
                    transition: transform 0.2s, color 0.2s;
                }
                .contact-detail-item[href]:hover .contact-detail-arrow {
                    transform: translateX(3px);
                    color: #a89070;
                }

                /* CTA Button */
                .contact-cta {
                    display: inline-block;
                    background: #e8d9c0;
                    color: #1a1208;
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 14px 36px;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s;
                    opacity: 0;
                }
                .contact-cta.animate {
                    animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.7s;
                }
                .contact-cta:hover  { background: #f5ead8; }
                .contact-cta:active { transform: scale(0.96); }
            `}</style>

            <section className="contact-section" ref={sectionRef}>
                {/* Mesh */}
                <svg className="contact-mesh" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="contact-mesh" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#c8a87a" strokeWidth="0.4" />
                        </pattern>
                        <radialGradient id="contact-fade" cx="60%" cy="50%" r="65%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                        <mask id="contact-mask">
                            <rect width="100%" height="100%" fill="url(#contact-fade)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contact-mesh)" mask="url(#contact-mask)" />
                </svg>

                <div className="contact-glow-1" />
                <div className="contact-glow-2" />

                <div className="contact-inner">

                    {/* ── IMAGE ── */}
                    <div className={`contact-image-col ${triggered ? 'animate' : ''}`}>
                        <div className="contact-ring contact-ring-1" />
                        <div className="contact-ring contact-ring-2" />
                        <div className="contact-img-glow" />

                        <div className="contact-img-wrap">
                            <img src="imgs/oyin-2.jpg" alt="Oyindamola Olofinlua" />
                        </div>

                        <div className="contact-img-badge">
                            <div className="contact-img-badge-label">Currently</div>
                            <div className="contact-img-badge-value">Open to Projects ✦</div>
                        </div>
                    </div>

                    {/* ── TEXT ── */}
                    <div className="contact-text-col">
                        <div className="contact-eyebrow">
                            <div className={`contact-eyebrow-rule ${triggered ? 'animate' : ''}`} />
                            <span className={`contact-eyebrow-label ${triggered ? '' : ''}`}>Get In Touch</span>
                        </div>

                        <h2 className={`contact-heading ${triggered ? 'animate' : ''}`}>
                            Let's build something <em>worth reading.</em>
                        </h2>

                        <p className={`contact-body ${triggered ? 'animate' : ''}`}>
                            Whether you need a writer, an editor, a strategist, or all three —
                            I'd love to hear about your project. Reach out through any of the
                            channels below and let's start a conversation.
                        </p>

                        <div className="contact-details">
                            {contactDetails.map((item, i) => {
                                const Tag = item.href ? 'a' : 'div'
                                return (
                                    <Tag
                                        key={item.label}
                                        {...(item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}
                                        className={`contact-detail-item ${triggered ? 'animate' : ''}`}
                                        style={{ animationDelay: `${0.35 + i * 0.08}s` }}
                                    >
                                        <div className="contact-detail-icon">{item.icon}</div>
                                        <div className="contact-detail-text">
                                            <div className="contact-detail-label">{item.label}</div>
                                            <div className="contact-detail-value">{item.value}</div>
                                        </div>
                                        {item.href && <span className="contact-detail-arrow">→</span>}
                                    </Tag>
                                )
                            })}
                        </div>

                        <a href="/contact" className={`contact-cta ${triggered ? 'animate' : ''}`}>
                            Send a Message
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactSection