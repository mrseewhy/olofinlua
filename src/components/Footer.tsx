
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <style>{`
                .footer-root {
                    font-family: 'DM Sans', system-ui, sans-serif;
                    background: #faf7f2;
                    border-top: 1px solid #ede8df;
                    width: 100%;
                    padding: 16px 2rem;
                    display: grid;
                    place-items: center;
                }

                .footer-text {
                    font-size: 0.9rem;
                    color: #7a6a58;
                    text-align: center;
                    letter-spacing: 0.02em;
                }

                .footer-link {
                    font-weight: 600;
                    color: #1a1208;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-link:hover { color: #a89070; }
            `}</style>

            <footer className="footer-root">
                <p className="footer-text">
                    &copy; Copyright {new Date().getFullYear()}.{' '}
                    <NavLink to="/" className="footer-link">Olofinlua.com</NavLink>
                    . Designed By{' '}
                    <a href="https://bigyarddigital.com/" target="_blank" rel="noreferrer" className="footer-link">
                        Bigyard Digital
                    </a>
                </p>
            </footer>
        </>
    )
}

export default Footer