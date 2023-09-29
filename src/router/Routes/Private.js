import UserList from "../../views/Private/UserList"
import UserProfile from "../../views/Private/UserProfile"


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