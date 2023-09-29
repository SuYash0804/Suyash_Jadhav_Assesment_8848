import { lazy } from "react"

const UserList = lazy(() => import('../../views/Private/UserList'))
const UserProfile = lazy(() => import('../../views/Private/UserProfile'))

const private_routes = [
    {
        path: "/user_list/",
        element: UserList
    },
    {
        path: "/user_profile/",
        element: UserProfile
    }, 
]

export default private_routes