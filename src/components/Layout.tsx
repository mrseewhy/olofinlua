import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div>This is Nav</div>
            <Outlet />
            <div>This is footer</div>
        </div>
    )
}

export default Layout