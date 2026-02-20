import { useEffect, useRef, useState } from "react"

const posts = [
    {
        category: "Writing",
        title: "Why Every Brand Needs a Voice — Not Just a Tone",
        excerpt: "Tone changes with context. Voice doesn't. Here's why the distinction matters more than most brands realise, and how to find yours.",
        date: "January 14, 2025",
        readTime: "5 min read",
        gradient: "linear-gradient(135deg, #2c1810 0%, #1a0e08 100%)",
        accent: "#c8a87a",
        tag: "Brand Strategy",
    },
    {
        category: "Editing",
        title: "The One Edit That Makes Every Piece of Writing Better",
        excerpt: "Before you touch grammar, structure, or style — do this first. It's the edit most writers skip, and the one that changes everything.",
        date: "December 3, 2024",
        readTime: "4 min read",
        gradient: "linear-gradient(135deg, #0e1a1c 0%, #081014 100%)",
        accent: "#7ab8c8",
        tag: "Editorial Craft",
    },
    {
        category: "Strategy",
        title: "Thought Leadership Is Earned, Not Declared",
        excerpt: "Anyone can publish. Fewer people have something worth saying. Here's the framework I use to help executives build authority that sticks.",
        date: "November 19, 2024",
        readTime: "6 min read",
        gradient: "linear-gradient(135deg, #1a1628 0%, #100e1a 100%)",
        accent: "#a88cc8",
        tag: "Thought Leadership",
    },
]

const BlogSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [triggered, setTriggered] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
                .blog-section {
                    width: 100%;
                    background: #faf7f2;
                    padding: 88px 2rem;
                    position: relative;
                    overflow: hidden;
                }

                @media (max-width: 640px) {
                    .blog-section { padding: 64px 1.25rem; }
                }

                .blog-inner {
                    max-width: 1280px;
                    margin: 0 auto;
                }

                /* ── HEADER ── */
                .blog-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    gap: 20px;
                    margin-bottom: 48px;
                    flex-wrap: wrap;
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes ruleGrow {
                    from { width: 0; }
                    to   { width: 28px; }
                }
                @keyframes cardIn {
                    from { opacity: 0; transform: translateY(32px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .blog-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 12px;
                    opacity: 0;
                }
                .blog-eyebrow.animate {
                    animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.05s;
                }
                .blog-eyebrow-rule {
                    height: 1px;
                    background: #a89070;
                    width: 0;
                }
                .blog-eyebrow-rule.animate {
                    animation: ruleGrow 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.1s;
                }
                .blog-eyebrow-label {
                    font-size: 0.65rem;
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: #a89070;
                    font-weight: 500;
                }

                .blog-heading {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: clamp(1.8rem, 3vw, 2.6rem);
                    font-weight: 900;
                    color: #1a1208;
                    line-height: 1.1;
                    opacity: 0;
                }
                .blog-heading.animate {
                    animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.15s;
                }
                .blog-heading em { font-style: italic; color: #a89070; }

                .blog-view-all {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #a89070;
                    text-decoration: none;
                    white-space: nowrap;
                    transition: color 0.2s, gap 0.2s;
                    opacity: 0;
                    padding-bottom: 4px;
                }
                .blog-view-all.animate {
                    animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
                    animation-delay: 0.2s;
                }
                .blog-view-all:hover { color: #1a1208; gap: 10px; }
                .blog-view-all::after { content: '→'; }

                /* ── GRID ── */
                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                @media (max-width: 960px) {
                    .blog-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 580px) {
                    .blog-grid { grid-template-columns: 1fr; }
                }

                /* ── CARD ── */
                .blog-card {
                    background: #fff;
                    border: 1px solid #ede8df;
                    border-radius: 16px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    opacity: 0;
                    transition: transform 0.25s cubic-bezier(0.16,1,0.3,1),
                                box-shadow 0.25s ease,
                                border-color 0.25s ease;
                    text-decoration: none;
                    cursor: pointer;
                }
                .blog-card.animate {
                    animation: cardIn 0.65s cubic-bezier(0.16,1,0.3,1) both;
                }
                .blog-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 48px rgba(168,144,112,0.14);
                    border-color: rgba(168,144,112,0.35);
                }

                /* Card image area */
                .blog-card-img {
                    width: 100%;
                    height: 200px;
                    position: relative;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .blog-card-img-bg {
                    width: 100%; height: 100%;
                    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
                }
                .blog-card:hover .blog-card-img-bg {
                    transform: scale(1.04);
                }

                /* Decorative elements inside the image */
                .blog-img-deco {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 8px;
                }
                .blog-img-quote {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: 5rem;
                    font-weight: 900;
                    font-style: italic;
                    color: rgba(255,255,255,0.06);
                    line-height: 1;
                    position: absolute;
                    top: -10px;
                    left: 16px;
                    user-select: none;
                }
                .blog-img-tag {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    font-size: 0.6rem;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    font-weight: 600;
                    padding: 5px 12px;
                    border-radius: 999px;
                    background: rgba(255,255,255,0.12);
                    border: 1px solid rgba(255,255,255,0.18);
                    color: rgba(255,255,255,0.8);
                    backdrop-filter: blur(6px);
                }
                .blog-img-lines {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .blog-img-line {
                    height: 2px;
                    border-radius: 2px;
                    background: rgba(255,255,255,0.15);
                }

                /* Card body */
                .blog-card-body {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    gap: 10px;
                }

                .blog-card-meta {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .blog-card-category {
                    font-size: 0.62rem;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: #a89070;
                }
                .blog-card-dot {
                    width: 3px; height: 3px;
                    border-radius: 50%;
                    background: #c8b898;
                }
                .blog-card-date {
                    font-size: 0.62rem;
                    color: #9a8a78;
                    letter-spacing: 0.04em;
                }

                .blog-card-title {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #1a1208;
                    line-height: 1.35;
                }

                .blog-card-excerpt {
                    font-size: 0.83rem;
                    color: #7a6a58;
                    line-height: 1.75;
                    flex: 1;
                }

                .blog-card-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 14px;
                    border-top: 1px solid #ede8df;
                    margin-top: 4px;
                }

                .blog-card-readtime {
                    font-size: 0.65rem;
                    color: #9a8a78;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                }

                .blog-card-read-more {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #a89070;
                    text-decoration: none;
                    padding: 6px 14px;
                    border-radius: 999px;
                    border: 1px solid rgba(168,144,112,0.3);
                    transition: background 0.2s, border-color 0.2s, gap 0.2s, color 0.2s;
                }
                .blog-card-read-more:hover {
                    background: rgba(168,144,112,0.08);
                    border-color: rgba(168,144,112,0.6);
                    color: #1a1208;
                    gap: 8px;
                }
                .blog-card-read-more-arrow {
                    font-size: 0.8rem;
                    transition: transform 0.2s;
                }
                .blog-card-read-more:hover .blog-card-read-more-arrow {
                    transform: translateX(3px);
                }
            `}</style>

            <section className="blog-section" ref={sectionRef}>
                <div className="blog-inner">

                    {/* Header */}
                    <div className="blog-header">
                        <div>
                            <div className={`blog-eyebrow ${triggered ? 'animate' : ''}`}>
                                <div className={`blog-eyebrow-rule ${triggered ? 'animate' : ''}`} />
                                <span className="blog-eyebrow-label">Latest Writing</span>
                            </div>
                            <h2 className={`blog-heading ${triggered ? 'animate' : ''}`}>
                                From my <em>Blog</em>
                            </h2>
                        </div>
                        <a href="/blog" className={`blog-view-all ${triggered ? 'animate' : ''}`}>
                            All Posts
                        </a>
                    </div>

                    {/* Cards */}
                    <div className="blog-grid">
                        {posts.map((post, i) => (
                            <article
                                key={post.title}
                                className={`blog-card ${triggered ? 'animate' : ''}`}
                                style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                            >
                                {/* Image */}
                                <div className="blog-card-img">
                                    <div
                                        className="blog-card-img-bg"
                                        style={{ background: post.gradient }}
                                    />
                                    <div className="blog-img-deco">
                                        <div className="blog-img-quote">"</div>
                                        <span className="blog-img-tag">{post.tag}</span>
                                        <div className="blog-img-lines">
                                            <div className="blog-img-line" style={{ width: 80, background: `rgba(${post.accent === '#c8a87a' ? '200,168,122' : post.accent === '#7ab8c8' ? '122,184,200' : '168,140,200'},0.35)` }} />
                                            <div className="blog-img-line" style={{ width: 48, background: `rgba(${post.accent === '#c8a87a' ? '200,168,122' : post.accent === '#7ab8c8' ? '122,184,200' : '168,140,200'},0.2)` }} />
                                        </div>
                                    </div>
                                    {/* Accent glow at bottom */}
                                    <div style={{
                                        position: 'absolute', bottom: 0, left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '70%', height: '50%',
                                        borderRadius: '50%',
                                        background: `radial-gradient(ellipse, ${post.accent}33 0%, transparent 70%)`,
                                        filter: 'blur(20px)',
                                        pointerEvents: 'none',
                                    }} />
                                </div>

                                {/* Body */}
                                <div className="blog-card-body">
                                    <div className="blog-card-meta">
                                        <span className="blog-card-category">{post.category}</span>
                                        <div className="blog-card-dot" />
                                        <span className="blog-card-date">{post.date}</span>
                                    </div>

                                    <h3 className="blog-card-title">{post.title}</h3>
                                    <p className="blog-card-excerpt">{post.excerpt}</p>

                                    <div className="blog-card-footer">
                                        <span className="blog-card-readtime">{post.readTime}</span>
                                        <a href="/blog" className="blog-card-read-more">
                                            Read more
                                            <span className="blog-card-read-more-arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default BlogSection