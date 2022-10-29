import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Home from "../components/Pages/Home";
import Faq from '../components/Pages/Faq'
import Blog from '../components/Pages/Blog'
import Courses from "../components/Pages/Courses";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../components/Main/Main");

const router = createBrowserRouter([{
    path: '/', element: <Main></Main>, 
    children: [
        {path: '/', element: <Home></Home>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '/course', element: <Courses></Courses>},
        {path: '/faq', element: <Faq></Faq>},
        {path: '/login', element: <Login></Login>},
        {path: '/register', element: <Register></Register>},
    ]
}])

export default router;