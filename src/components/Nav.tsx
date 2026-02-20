// import { NavLink } from "react-router-dom"
// import { useState, useEffect } from "react"

// const Nav = () => {
//     const [menuOpen, setMenuOpen] = useState(false)
//     const [scrolled, setScrolled] = useState(false)

//     const navItems = [
//         { url: "/", name: 'Home' },
//         { url: "/about", name: 'About Me' },
//         { url: "/testimonials", name: 'Testimonials' },
//         { url: "/works", name: 'My Work' },
//         { url: "/blog", name: 'Blog' },
//         { url: "/contact", name: 'Contact Me' },
//     ]

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 10)
//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     // Close menu on route change
//     const handleNavClick = () => setMenuOpen(false)

//     return (
//         <>
//             <nav className={`
//                 w-full h-16 bg-white fixed top-0 left-0 z-50 grid place-items-center
//                 transition-shadow duration-300
//                 ${scrolled ? 'shadow-md' : 'shadow-sm'}
//             `}>
//                 <div className='w-full h-full max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between '>
//                     {/* Logo */}
//                     <NavLink to='/' onClick={handleNavClick}>
//                         <img src="/imgs/olofinlua-logo.png" alt="logo" className="h-10" />
//                     </NavLink>

//                     {/* Desktop Nav */}
//                     <ul className="hidden md:flex gap-6 lg:gap-8 font-bold">
//                         {navItems.map((item, index) => (
//                             <li key={item.url + index}>
//                                 <NavLink
//                                     to={item.url}
//                                     className={({ isActive }) => `
//                                         relative pb-1 text-sm lg:text-base
//                                         transition-colors duration-200
//                                         after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current
//                                         after:transition-all after:duration-300
//                                         ${isActive
//                                             ? 'text-blue-900 after:w-full'
//                                             : 'text-gray-900 hover:text-blue-900 after:w-0 hover:after:w-full'
//                                         }
//                                     `}
//                                 >
//                                     {item.name}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Hamburger Button */}
//                     <button
//                         className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded focus:outline-none focus:ring-2 focus:ring-blue-900 active:scale-95 transition-transform"
//                         onClick={() => setMenuOpen(prev => !prev)}
//                         aria-label="Toggle menu"
//                         aria-expanded={menuOpen}
//                     >
//                         <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
//                         <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
//                         <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Drawer */}
//             <div className={`
//                 fixed inset-0 z-40 md:hidden transition-all duration-300
//                 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
//             `}>
//                 {/* Backdrop */}
//                 <div
//                     className={`absolute inset-0 bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-40' : 'opacity-0'}`}
//                     onClick={() => setMenuOpen(false)}
//                 />

//                 {/* Slide-in panel */}
//                 <div className={`
//                     absolute top-0 right-0 h-full w-64 bg-white shadow-2xl
//                     transition-transform duration-300 ease-in-out pt-20 px-6
//                     ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
//                 `}>
//                     <ul className="flex flex-col gap-1">
//                         {navItems.map((item, index) => (
//                             <li key={item.url + index}>
//                                 <NavLink
//                                     to={item.url}
//                                     onClick={handleNavClick}
//                                     className={({ isActive }) => `
//                                         block px-3 py-2.5 rounded-lg font-semibold text-sm
//                                         transition-all duration-150 active:scale-[0.98]
//                                         ${isActive
//                                             ? 'bg-blue-50 text-blue-900'
//                                             : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//                                         }
//                                     `}
//                                 >
//                                     {item.name}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* Spacer so content doesn't hide behind fixed nav */}
//             <div className="h-16" />
//         </>
//     )
// }

// export default Nav

import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navItems = [
        { url: "/", name: 'Home' },
        { url: "/about", name: 'About Me' },
        { url: "/testimonials", name: 'Testimonials' },
        { url: "/works", name: 'My Work' },
        { url: "/blog", name: 'Blog' },
        { url: "/contact", name: 'Contact Me' },
    ]

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = () => setMenuOpen(false)

    return (
        <>
            <style>{`
             

                .nav-root {
                    font-family: 'DM Sans', system-ui, sans-serif;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 50;
                    background: #faf7f2;
                    border-bottom: 1px solid #ede8df;
                    transition: box-shadow 0.3s ease;
                }

                .nav-root.scrolled {
                    box-shadow: 0 2px 24px rgba(0,0,0,0.08);
                }

                .nav-root.top {
                    box-shadow: none;
                }

                .nav-inner {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    height: 68px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                /* Logo */
                .nav-logo {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #1a1208;
                    text-decoration: none;
                    letter-spacing: -0.01em;
                    transition: color 0.2s;
                    display: flex;
                    align-items: center;
                }
                .nav-logo:hover { color: #a89070; }
                .nav-logo img { height: 36px; }

                /* Desktop links */
                .nav-links {
                    display: none;
                    list-style: none;
                    gap: 2rem;
                    align-items: center;
                }
                @media (min-width: 768px) {
                    .nav-links { display: flex; }
                }

                .nav-link {
                    position: relative;
                    font-size: 0.82rem;
                    font-weight: 500;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #5a4e42;
                    text-decoration: none;
                    padding-bottom: 4px;
                    transition: color 0.2s ease;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: #a89070;
                    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .nav-link:hover {
                    color: #1a1208;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .nav-link.active {
                    color: #1a1208;
                }
                .nav-link.active::after {
                    width: 100%;
                    background: #a89070;
                }

                /* CTA button in nav */
                .nav-cta {
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #1a1208;
                    background: #e8d9c0;
                    padding: 8px 20px;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s;
                    white-space: nowrap;
                }
                .nav-cta:hover { background: #f5ead8; }
                .nav-cta:active { transform: scale(0.96); }

                /* Hamburger */
                .hamburger {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                    gap: 5px;
                    background: none;
                    border: 1px solid rgba(26,18,8,0.2);
                    border-radius: 8px;
                    cursor: pointer;
                    transition: border-color 0.2s, transform 0.15s;
                    padding: 0;
                }
                .hamburger:hover { border-color: rgba(26,18,8,0.5); }
                .hamburger:active { transform: scale(0.95); }
                @media (min-width: 768px) { .hamburger { display: none; } }

                .ham-bar {
                    display: block;
                    width: 18px;
                    height: 1.5px;
                    background: #1a1208;
                    border-radius: 2px;
                    transition: transform 0.3s ease, opacity 0.3s ease;
                }
                .ham-bar.open-1 { transform: rotate(45deg) translate(4.5px, 4.5px); }
                .ham-bar.open-2 { opacity: 0; }
                .ham-bar.open-3 { transform: rotate(-45deg) translate(4.5px, -4.5px); }

                /* Mobile drawer backdrop */
                .drawer-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0);
                    z-index: 40;
                    pointer-events: none;
                    transition: background 0.35s ease;
                }
                .drawer-backdrop.open {
                    background: rgba(0,0,0,0.6);
                    pointer-events: auto;
                }

                /* Mobile drawer panel */
                .drawer-panel {
                    position: fixed;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 280px;
                    background: #faf7f2;
                    border-left: 1px solid #ede8df;
                    z-index: 50;
                    transform: translateX(100%);
                    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                }
                .drawer-panel.open {
                    transform: translateX(0);
                }

                /* Drawer header */
                .drawer-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 24px;
                    height: 68px;
                    border-bottom: 1px solid #ede8df;
                    flex-shrink: 0;
                }
                .drawer-close {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: none;
                    border: 1px solid rgba(26,18,8,0.15);
                    border-radius: 6px;
                    cursor: pointer;
                    color: #5a4e42;
                    font-size: 1.1rem;
                    transition: border-color 0.2s, color 0.2s;
                    line-height: 1;
                }
                .drawer-close:hover { border-color: rgba(26,18,8,0.4); color: #1a1208; }

                /* Drawer nav list */
                .drawer-links {
                    list-style: none;
                    padding: 24px 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    flex: 1;
                }

                .drawer-link {
                    display: flex;
                    align-items: center;
                    padding: 12px 16px;
                    border-radius: 8px;
                    font-size: 0.88rem;
                    font-weight: 500;
                    letter-spacing: 0.04em;
                    color: #7a6a58;
                    text-decoration: none;
                    transition: background 0.15s, color 0.15s;
                    position: relative;
                }
                .drawer-link:hover {
                    background: rgba(26,18,8,0.05);
                    color: #1a1208;
                }
                .drawer-link.active {
                    background: rgba(168,144,112,0.1);
                    color: #1a1208;
                }
                .drawer-link.active::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 3px;
                    height: 60%;
                    background: #a89070;
                    border-radius: 0 2px 2px 0;
                }

                /* Drawer footer */
                .drawer-footer {
                    padding: 20px 24px 32px;
                    border-top: 1px solid #ede8df;
                }
                .drawer-footer-cta {
                    display: block;
                    text-align: center;
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #1a1208;
                    background: #e8d9c0;
                    padding: 12px 20px;
                    border-radius: 999px;
                    text-decoration: none;
                    transition: background 0.2s;
                }
                .drawer-footer-cta:hover { background: #f5ead8; }

                .drawer-tagline {
                    text-align: center;
                    font-size: 0.6rem;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #9a8a78;
                    margin-top: 16px;
                }
            `}</style>

            {/* Nav bar */}
            <nav className={`nav-root ${scrolled ? 'scrolled' : 'top'}`}>
                <div className="nav-inner">

                    {/* Logo */}
                    <NavLink to="/" onClick={handleNavClick} className="nav-logo">
                        <img src="/imgs/olofinlua-logo.png" alt="Olofinlua" />
                    </NavLink>

                    {/* Desktop links */}
                    <ul className="nav-links">
                        {navItems.slice(0, -1).map((item, index) => (
                            <li key={item.url + index}>
                                <NavLink
                                    to={item.url}
                                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                        {/* Last item as CTA button */}
                        <li>
                            <NavLink to="/contact" className="nav-cta" onClick={handleNavClick}>
                                Contact Me
                            </NavLink>
                        </li>
                    </ul>

                    {/* Hamburger */}
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={`ham-bar ${menuOpen ? 'open-1' : ''}`} />
                        <span className={`ham-bar ${menuOpen ? 'open-2' : ''}`} />
                        <span className={`ham-bar ${menuOpen ? 'open-3' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Backdrop */}
            <div
                className={`drawer-backdrop ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile drawer */}
            <div className={`drawer-panel ${menuOpen ? 'open' : ''}`}>
                {/* Drawer header */}
                <div className="drawer-header">
                    <NavLink to="/" onClick={handleNavClick} className="nav-logo">
                        <img src="/imgs/olofinlua-logo.png" alt="Olofinlua" />
                    </NavLink>
                    <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                        ✕
                    </button>
                </div>

                {/* Drawer links */}
                <ul className="drawer-links">
                    {navItems.map((item, index) => (
                        <li key={item.url + index}>
                            <NavLink
                                to={item.url}
                                onClick={handleNavClick}
                                className={({ isActive }) => `drawer-link${isActive ? ' active' : ''}`}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Drawer footer */}
                <div className="drawer-footer">
                    <NavLink to="/contact" className="drawer-footer-cta" onClick={handleNavClick}>
                        Get In Touch
                    </NavLink>
                    <p className="drawer-tagline">Writer · Editor · Strategist</p>
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: 68 }} />
        </>
    )
}

export default Nav