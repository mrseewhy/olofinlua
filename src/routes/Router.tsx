import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import Layout from "../components/Layout";
import Testimonials from "../pages/Testimonials";
import Works from "../pages/Works";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { index: true, element: <Index /> },
            { path: "about", element: <Index /> },
            { path: "testimonials", element: <Testimonials /> },
            { path: "works", element: <Works /> },
            { path: "blog", element: <Blog /> },
            { path: "contact", element: <Contact /> },
        ]
    }
])