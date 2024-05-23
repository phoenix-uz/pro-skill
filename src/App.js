// import { BrowserRouter} from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { linksGroup } from "./router";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import ScrollToTop from "./router/skrollToTop";
import "./assets/styles/global.sass";


const App = () => {
  return (
      <BrowserRouter>
      <ToastContainer />
        <TopBanner/>
        <Header/>
          <ScrollToTop/>
          <Routes>
            {linksGroup.map((route) => (
              <Route key={route.id} path={route.path} element={route.component} />
            ))}
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;


