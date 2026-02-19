import { NavLink } from "react-router-dom"
const Nav = () => {
    const navItems = [
        { url: "/", name: 'Home' },
        { url: "/about", name: 'About Me' },
        { url: "/testimonials", name: 'Testimonials' },
        { url: "/works", name: 'My Work' },
        { url: "/blog", name: 'Blog' },
        { url: "/contact", name: 'Contact Me' },
    ]
    return (
        <nav className='w-full h-16 bg-white grid place-items-center'>
            {/* Desktop */}
            <div className='w-full h-full md:max-w-[1280px] mx-auto flex items-center justify-between'>
                <div>
                    <img src="/imgs/olofinlua-logo.png" alt="logo" className="h-12" />
                </div>
                <div>
                    <ul className="flex gap-8 font-bold">
                        {navItems.map((item, index) => {
                            return (
                                <li key={item.url + index}>
                                    <NavLink to={item.url}>{item.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav