import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Home from "../components/Pages/Home";
import Faq from '../components/Pages/Faq'
import Blog from '../components/Pages/Blog'
import Courses from "../components/Pages/Courses";
import LeftSide from "../components/Pages/CourseSide/LeftSide";
import RightSide from "../components/Pages/CourseSide/RightSide";
import Single from "../components/Pages/CourseSide/Single";



const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../components/Main/Main");

const router = createBrowserRouter([{
    path: '/', element: <Main></Main>,
    children: [
        { path: '/', element: <Home></Home> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/course/', element: <Courses></Courses>, },
        { path: '/faq', element: <Faq></Faq> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        {
            path: '/products/:id', element: <LeftSide></LeftSide>,
        },
        { path: '/news/:id', element: <RightSide></RightSide>},

        {path: '/single/:id',  element: <Single></Single>,
    
        loader: ({ params }) => {
            return fetch(`http://localhost:5000/course/${params.id}`)
           }}
    ]
}])

export default router;