import { lazy } from "react"

const Login = lazy(() => import('../../views/Auth/Login'))

const auth_routes = [
    {
        path: "/login/",
        element: Login
    }
]

export default auth_routes