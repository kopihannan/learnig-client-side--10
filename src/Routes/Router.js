const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../components/Main/Main");

const router = createBrowserRouter([{
    path: '/', element: <Main></Main>
}])

export default router;