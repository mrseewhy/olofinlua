import { useEffect, useRef } from "react"

const Hero = () => {
    const headlineRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const el = headlineRef.current
        if (!el) return
        el.style.opacity = "0"
        el.style.transform = "translateY(24px)"
        requestAnimationFrame(() => {
            el.style.transition = "opacity 0.9s ease, transform 0.9s ease"
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
        })
    }, [])

    return (
        <>
            <style>{`

                .hero-root {
                    font-family: 'DM Sans', sans-serif;
                }
                .hero-display {
                    font-family: 'Playfair Display', serif;
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0);  }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes slideRight {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }

                .anim-fade-up-1  { animation: fadeUp 0.8s ease both; animation-delay: 0.1s; }
                .anim-fade-up-2  { animation: fadeUp 0.8s ease both; animation-delay: 0.3s; }
                .anim-fade-up-3  { animation: fadeUp 0.8s ease both; animation-delay: 0.5s; }
                .anim-fade-up-4  { animation: fadeUp 0.8s ease both; animation-delay: 0.7s; }
                .anim-fade-in    { animation: fadeIn 1.2s ease both; animation-delay: 0.6s; }
                .anim-line       { transform-origin: left; animation: slideRight 0.8s cubic-bezier(0.16,1,0.3,1) both; animation-delay: 0.2s; }

                .rule-line {
                    height: 1px;
                    background: #a89070;
                    transform-origin: left;
                }

                .tag-pill {
                    display: inline-block;
                    border: 1px solid rgba(168,144,112,0.4);
                    color: #a89070;
                    font-size: 0.65rem;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    padding: 4px 12px;
                    border-radius: 999px;
                    font-weight: 500;
                }

                .cta-primary {
                    background: #e8d9c0;
                    color: #1a1208;
                    font-weight: 600;
                    font-size: 0.8rem;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 12px 28px;
                    border-radius: 999px;
                    transition: background 0.2s, transform 0.15s;
                    display: inline-block;
                }
                .cta-primary:hover { background: #f5ead8; }
                .cta-primary:active { transform: scale(0.96); }

                .cta-ghost {
                    border: 1px solid rgba(232,217,192,0.35);
                    color: #e8d9c0;
                    font-weight: 500;
                    font-size: 0.8rem;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 12px 28px;
                    border-radius: 999px;
                    transition: background 0.2s, border-color 0.2s, transform 0.15s;
                    display: inline-block;
                }
                .cta-ghost:hover { background: rgba(232,217,192,0.08); border-color: rgba(232,217,192,0.6); }
                .cta-ghost:active { transform: scale(0.96); }

                /* decorative big letter */
                .deco-letter {
                    position: absolute;
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(160px, 22vw, 320px);
                    font-weight: 900;
                    font-style: italic;
                    color: rgba(255,255,255,0.025);
                    line-height: 1;
                    user-select: none;
                    pointer-events: none;
                    top: -0.05em;
                    left: -0.04em;
                    z-index: 1;
                }

                /* image glow */
                .img-glow-1 {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 85%;
                    height: 65%;
                    border-radius: 50%;
                    background: radial-gradient(ellipse, rgba(168,130,80,0.45) 0%, transparent 70%);
                    filter: blur(55px);
                    pointer-events: none;
                    z-index: 0;
                }
                .img-glow-2 {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 50%;
                    height: 45%;
                    border-radius: 50%;
                    background: radial-gradient(ellipse, rgba(210,170,100,0.35) 0%, transparent 70%);
                    filter: blur(30px);
                    pointer-events: none;
                    z-index: 0;
                }

                /* stat numbers */
                .stat-value {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #e8d9c0;
                    line-height: 1;
                }
                .stat-label {
                    font-size: 0.65rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #7a6a58;
                    margin-top: 2px;
                }

                /* vertical text on side */
                .vertical-tag {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                    transform: rotate(180deg);
                    font-size: 0.6rem;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #5a4e42;
                    font-weight: 500;
                }

                /* image column — full width + centered on mobile, constrained on desktop */
                .img-col {
                    width: 100%;
                    max-width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                }
                @media (min-width: 768px) {
                    .img-col {
                        width: 52%;
                        max-width: 600px;
                        margin-left: 0;
                        margin-right: 0;
                        flex: 0 0 auto;
                    }
                }

                /* hero image sizing */
                .hero-img {
                    width: 85%;
                    max-width: 360px;
                    min-height: 420px;
                    max-height: 560px;
                    object-fit: contain;
                    object-position: bottom center;
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                }
                @media (min-width: 768px) {
                    .hero-img {
                        width: 100%;
                        max-width: 100%;
                        min-height: unset;
                        max-height: unset;
                        margin-left: 0;
                        margin-right: 0;
                    }
                }

                /* mesh */
                .mesh-svg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.12;
                    z-index: 0;
                }
            `}</style>

            <div
                className="hero-root relative w-full flex flex-col overflow-hidden"
                style={{
                    minHeight: "90vh",
                    background: "linear-gradient(135deg, #141008 0%, #1c1610 40%, #100e14 100%)",
                }}
            >
                {/* Mesh grid */}
                <svg className="mesh-svg" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hero-mesh" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#c8a87a" strokeWidth="0.4" />
                        </pattern>
                        <radialGradient id="hero-mesh-fade" cx="40%" cy="50%" r="65%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                        <mask id="hero-mesh-mask">
                            <rect width="100%" height="100%" fill="url(#hero-mesh-fade)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-mesh)" mask="url(#hero-mesh-mask)" />
                </svg>

                {/* Ambient colour glows */}
                <div style={{ position: "absolute", top: "-10%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "rgba(120,80,30,0.18)", filter: "blur(120px)", zIndex: 0, pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "0", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "rgba(80,50,120,0.12)", filter: "blur(100px)", zIndex: 0, pointerEvents: "none" }} />

                {/* Decorative giant italic letter */}
                <div className="deco-letter">O</div>

                {/* Vertical side label — hidden on small screens */}
                <div className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 z-10 items-center gap-2">
                    <div className="vertical-tag">Portfolio · 2025</div>
                    <div style={{ width: 1, height: 60, background: "rgba(120,100,70,0.3)" }} />
                </div>

                {/* ── MAIN LAYOUT ── */}
                <div
                    className="relative z-10 flex-1 w-full mx-auto flex flex-col md:flex-row items-end justify-between"
                    style={{ maxWidth: 1280, padding: "0 2rem" }}
                >

                    {/* ── LEFT: TEXT COLUMN ── */}
                    <div
                        className="flex flex-col w-full md:w-[46%] text-left self-center md:self-end"
                        style={{ paddingTop: "clamp(2rem, 6vw, 7rem)", paddingBottom: "clamp(1rem, 2vw, 4rem)" }}
                    >
                        {/* Top label */}
                        <div className="anim-fade-up-1 flex items-center gap-3 mb-6">
                            <div className="rule-line anim-line" style={{ width: 36 }} />
                            <span className="tag-pill">Writer · Editor · Strategist</span>
                        </div>

                        {/* Name headline */}
                        <div className="anim-fade-up-1 mb-2">
                            <p className="hero-display" style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#a89070", fontWeight: 400, marginBottom: "0.5rem" }}>
                                Hello, I'm
                            </p>
                            <h1
                                ref={headlineRef}
                                className="hero-display"
                                style={{
                                    fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                                    fontWeight: 900,
                                    lineHeight: 1.05,
                                    color: "#f5ead8",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Oyindamola<br />
                                <span style={{ fontStyle: "italic", color: "#e8d9c0" }}>Olofinlua</span>
                            </h1>
                        </div>

                        {/* Nickname line */}
                        <div className="anim-fade-up-2 flex items-center gap-3 my-5">
                            <div className="rule-line" style={{ width: "100%", maxWidth: 200, opacity: 0.4 }} />
                            <p style={{ fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6a58", whiteSpace: "nowrap", fontWeight: 500 }}>
                                Oyin is fine <span style={{ marginLeft: 4 }}>🙂</span>
                            </p>
                        </div>

                        {/* Body copy */}
                        <div className="anim-fade-up-3" style={{ maxWidth: 460 }}>
                            <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", fontWeight: 600, color: "#e8d9c0", marginBottom: "0.6rem" }}>
                                I love words.
                            </p>
                            <p style={{ fontSize: "clamp(0.88rem, 1.2vw, 1rem)", color: "#9a8a78", lineHeight: 1.75 }}>
                                I write them, edit them, listen to them, sell with
                                them, and manage them. Language is my craft — and
                                every word is intentional.
                            </p>
                        </div>

                        {/* Stats row */}
                        <div className="anim-fade-up-3 flex gap-8 my-8">
                            {[
                                { value: "10+", label: "Years Writing" },
                                { value: "50+", label: "Brands Served" },
                                { value: "∞", label: "Words Crafted" },
                            ].map(s => (
                                <div key={s.label}>
                                    <div className="stat-value">{s.value}</div>
                                    <div className="stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="anim-fade-up-4 flex flex-wrap gap-3">
                            <a href="/works" className="cta-primary">See My Work</a>
                            <a href="/contact" className="cta-ghost">Get In Touch</a>
                        </div>
                    </div>

                    {/* ── RIGHT: IMAGE COLUMN ── */}
                    <div
                        className="img-col relative shrink-0 self-end flex justify-center md:justify-end"
                        style={{ width: "100%" }}
                    >
                        {/* Image glow */}
                        <div className="img-glow-1 anim-fade-in" />
                        <div className="img-glow-2 anim-fade-in" />

                        {/* Decorative ring behind image */}
                        <div
                            className="anim-fade-in"
                            style={{
                                position: "absolute",
                                bottom: "8%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "70%",
                                aspectRatio: "1",
                                borderRadius: "50%",
                                border: "1px solid rgba(168,144,112,0.15)",
                                zIndex: 0,
                                pointerEvents: "none",
                            }}
                        />
                        <div
                            className="anim-fade-in"
                            style={{
                                position: "absolute",
                                bottom: "4%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "85%",
                                aspectRatio: "1",
                                borderRadius: "50%",
                                border: "1px solid rgba(168,144,112,0.08)",
                                zIndex: 0,
                                pointerEvents: "none",
                            }}
                        />

                        <img
                            src="imgs/oyin.png"
                            alt="Oyindamola Olofinlua"
                            className="anim-fade-in hero-img mt-6"
                            style={{
                                position: "relative",
                                zIndex: 2,
                                display: "block",
                                width: "100%",
                                objectFit: "contain",
                                objectPosition: "bottom",
                                filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.6))",
                            }}
                        />

                        {/* Small floating label card */}
                        <div
                            className="anim-fade-up-4 hidden md:block"
                            style={{
                                position: "absolute",
                                top: "18%",
                                left: "-12%",
                                background: "rgba(30,24,16,0.75)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(168,144,112,0.2)",
                                borderRadius: 12,
                                padding: "10px 16px",
                                zIndex: 10,
                            }}
                        >
                            <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a6a58", marginBottom: 2 }}>Currently</p>
                            <p style={{ fontSize: "0.78rem", color: "#e8d9c0", fontWeight: 600 }}>Open to Projects ✦</p>
                        </div>
                    </div>

                </div>

                {/* Bottom rule */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(168,144,112,0.2), transparent)", zIndex: 10 }} />
            </div>
        </>
    )
}

export default Hero