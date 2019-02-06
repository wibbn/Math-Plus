import LandingPage from "views/LandingPage/LandingPage.jsx"
import ProfilePage from "views/ProfilePage/ProfilePage.jsx"
import LoginPage from "views/LoginPage/LoginPage.jsx"
import TestPage from "views/TestPage/TestPage.jsx"

var indexRoutes = [
    { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
    { path: "/login-page", name: "LoginPage", component: LoginPage },
    { path: "/test-page", name: "TestPage", component: TestPage },
    { path: "/", name: "LandingPage", component: LandingPage }
]

export default indexRoutes
