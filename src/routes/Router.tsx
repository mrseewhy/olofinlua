import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import Layout from "../components/Layout";


export const router = createBrowserRouter([
    {
        path: '', element: <Layout />, children: [
            { index: true, element: <Index /> }
        ]
    }
])