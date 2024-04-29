// import { BrowserRouter} from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { linksGroup } from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import "./assets/styles/global.sass";
import ScrollToTop from "./router/skrollToTop";


const App = () => {
  return (
      <BrowserRouter>
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


