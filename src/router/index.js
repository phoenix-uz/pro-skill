import AboutPage from "../pages/About";
import AuthPage from "../pages/Auth";
import OtpForm from "../pages/Auth/OtpForm";
import ContactsPage from "../pages/Contacts";
import CoursesPage from "../pages/Courses";
import LibraryPage from "../pages/Library";
import MainPage from "../pages/Main";
import NewsPage from "../pages/News";
import PaymentPage from "../pages/Payment";

export const linksGroup = [
    {id:1, path:'/', component: <MainPage/>},
    {id:2, path:`/courses/:id`, component: <CoursesPage/>},
    {id:3, path:'/library', component: <LibraryPage/>},
    {id:4, path:'/news', component: <NewsPage/>},
    {id:5, path:'/about', component: <AboutPage/>},
    {id:6, path:'/contacts', component: <ContactsPage/>},
    {id:7, path:'/test', component: <PaymentPage/>},
    {id:8, path:'/auth', component: <AuthPage/>},
    {id:9, path:'/otp', component: <OtpForm/>},
    {id:10, path:'/payment', component: <PaymentPage/>},
]