import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Home from "../components/Pages/Home";
import Faq from '../components/Pages/Faq'
import Course from '../components/Pages/Courses'
import Blog from '../components/Pages/Blog'

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../components/Main/Main");

const router = createBrowserRouter([{
    path: '/', element: <Main></Main>, 
    children: [
        {path: '/', element: <Home></Home>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '/course', element: <Course></Course>},
        {path: '/faq', element: <Faq></Faq>},
        {path: '/login', element: <Login></Login>},
        {path: '/register', element: <Register></Register>},
    ]
}])

export default router;