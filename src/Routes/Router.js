import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Home from "../components/Pages/Home";
import Faq from '../components/Pages/Faq'
import Blog from '../components/Pages/Blog'
import Courses from "../components/Pages/Courses";
import DetailsPage from "../components/Pages/CourseSide/DetailsPage";
import Checkout from "../components/Pages/Checkout";
import PrivateRoutes from "./PrivateRoutes";



const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../components/Main/Main");

const router = createBrowserRouter([{
    path: '/', element: <Main></Main>,
    
    children: [
        { path: '/', element: <Home></Home> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/course', element: <Courses></Courses>, },
        { path: '/faq', element: <Faq></Faq> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        {path: '/details/:id',  element: <DetailsPage></DetailsPage>,
    
        loader: ({ params }) => {
            return fetch(`http://localhost:5000/course/${params.id}`)
           }},

        {path: '/checkout/:id', element:  <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,loader: ({ params }) => {
            return fetch(`http://localhost:5000/course/${params.id}`)
           }}
    ]
}])

export default router;