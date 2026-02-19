import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Layout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <div>This is footer</div>
        </div>
    )
}

export default Layout