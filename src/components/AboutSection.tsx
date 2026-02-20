import { useEffect, useRef, useState } from "react"

const stats = [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "%", label: "Competence" },
    { value: 7, suffix: "", label: "Industries Covered" },
    { value: 121, suffix: "+", label: "Successful Projects" },
]

const industries = [
    "Nonprofits and Development",
    "Fintech and PropTech",
    "Higher Education",
    "Banking and Financial Services",
    "Publishing and Media",
]

// Custom hook — counts from 0 to target when triggered
function useCountUp(target: number, duration = 1800, triggered = false) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!triggered) return
        let start = 0
        const step = target / (duration / 16)
        const timer = setInterval(() => {
            start += step
            if (start >= target) { setCount(target); clearInterval(timer) }
            else setCount(Math.floor(start))
        }, 16)
        return () => clearInterval(timer)
    }, [triggered, target, duration])
    return count
}

const StatCard = ({ value, suffix, label, triggered, delay }: {
    value: number; suffix: string; label: string; triggered: boolean; delay: number
}) => {
    const count = useCountUp(value, 1600, triggered)
    return (
        <div className={`stat-card ${triggered ? 'animate' : ''}`} style={{ animationDelay: `${delay}ms` }}>
            <div className="stat-card-value">{count}{suffix}</div>
            <div className="stat-card-label">{label}</div>
        </div>
    )
}

const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [triggered, setTriggered] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
            { threshold: 0.25 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
                .about-section {
                    width: 100%;
                    background: #faf7f2;
                    padding: 80px 2rem;
                }

                .about-inner {
                    max-width: 1280px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 64px;
                    align-items: center;
                }

                @media (max-width: 768px) {
                    .about-inner  { grid-template-columns: 1fr; gap: 40px; }
                    .about-stats  { order: 2; }
                    .about-text   { order: 1; }
                    .about-section { padding: 56px 1.25rem; }
                }

                /* ── STAT CARDS ── */
                .about-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                }

                @keyframes cardIn {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .stat-card {
                    border-radius: 16px;
                    padding: 36px 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    opacity: 0;
                    transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease, border-color 0.25s;
                    cursor: default;
                }
                .stat-card.animate {
                    animation: cardIn 0.6s cubic-bezier(0.16,1,0.3,1) both;
                }
                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 16px 40px rgba(168,144,112,0.15);
                }

                .stat-card:nth-child(odd)  { background: #fdf5e8; border: 1px solid rgba(168,144,112,0.2); }
                .stat-card:nth-child(even) { background: #eef6f8; border: 1px solid rgba(100,160,180,0.2); }

                .stat-card-value {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: clamp(2.4rem, 4vw, 3.2rem);
                    font-weight: 900;
                    color: #1a1208;
                    line-height: 1;
                    margin-bottom: 10px;
                }

                .stat-card-label {
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: #7a6a58;
                    letter-spacing: 0.03em;
                }

                /* ── TEXT SIDE ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .about-text .anim { opacity: 0; }
                .about-text .anim.animate {
                    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
                }

                .about-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 14px;
                }

                @keyframes ruleSlide {
                    from { width: 0; }
                    to   { width: 28px; }
                }

                .about-eyebrow-rule {
                    height: 1px;
                    background: #a89070;
                    width: 0;
                }
                .about-eyebrow-rule.animate {
                    animation: ruleSlide 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.1s;
                }

                .about-eyebrow-label {
                    font-size: 0.65rem;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #a89070;
                    font-weight: 500;
                }

                .about-heading {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: clamp(1.9rem, 3.2vw, 2.6rem);
                    font-weight: 900;
                    color: #1a1208;
                    line-height: 1.1;
                    margin-bottom: 20px;
                }
                .about-heading em { font-style: italic; color: #a89070; }

                .about-body {
                    font-size: 0.92rem;
                    color: #7a6a58;
                    line-height: 1.85;
                    margin-bottom: 20px;
                }

                .about-industries {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 7px;
                }

                .about-industry-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.85rem;
                    color: #5a4e42;
                    font-weight: 500;
                    opacity: 0;
                }
                .about-industry-item.animate {
                    animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both;
                }
                .about-industry-item::before {
                    content: '';
                    display: block;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: #a89070;
                    flex-shrink: 0;
                }

                .about-cta {
                    display: inline-block;
                    background: #e8d9c0;
                    color: #1a1208;
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 13px 32px;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s;
                }
                .about-cta:hover  { background: #f5ead8; }
                .about-cta:active { transform: scale(0.96); }
            `}</style>

            <section className="about-section" ref={sectionRef}>
                <div className="about-inner">

                    {/* ── STATS ── */}
                    <div className="about-stats">
                        {stats.map((s, i) => (
                            <StatCard
                                key={s.label}
                                {...s}
                                triggered={triggered}
                                delay={i * 100}
                            />
                        ))}
                    </div>

                    {/* ── TEXT ── */}
                    <div className="about-text">
                        <div className="about-eyebrow">
                            <div className={`about-eyebrow-rule ${triggered ? 'animate' : ''}`} />
                            <span className={`about-eyebrow-label anim ${triggered ? 'animate' : ''}`} style={{ animationDelay: '0.1s' }}>
                                Who I Am
                            </span>
                        </div>

                        <h2 className={`about-heading anim ${triggered ? 'animate' : ''}`} style={{ animationDelay: '0.15s' }}>
                            About <em>Me</em>
                        </h2>

                        <p className={`about-body anim ${triggered ? 'animate' : ''}`} style={{ animationDelay: '0.25s' }}>
                            Strategic communicator, editor, and product marketing specialist with over
                            a decade of experience building inclusive brands and engaging content across
                            digital, print, and live platforms.
                        </p>

                        <p className={`about-body anim ${triggered ? 'animate' : ''}`} style={{ animationDelay: '0.35s' }}>
                            I've collaborated with Founders, C-suite Executives, and Communications
                            Leads across diverse industries, including:
                        </p>

                        <ul className="about-industries">
                            {industries.map((item, i) => (
                                <li
                                    key={item}
                                    className={`about-industry-item ${triggered ? 'animate' : ''}`}
                                    style={{ animationDelay: `${0.4 + i * 0.08}s` }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="/about"
                            className={`about-cta anim ${triggered ? 'animate' : ''}`}
                            style={{ animationDelay: '0.75s' }}
                        >
                            Read More
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutSection