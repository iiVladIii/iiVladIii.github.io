import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";

export const publicRoutes = [
    {path: '/main', element: <HomePage/>, exact: true},
    {path: '/cart', element: <CartPage/>, exact: true},
    // {path: '/vilm/moviePage/:id', element: <MoviePage/>, exact: true},
]
