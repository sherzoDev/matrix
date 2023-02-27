import Header from "./components/Header/Header";
import CourseAbout from "./components/CourseAbout/CourseAbout";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Tarif from "./components/Tarif/Tarif";
import WhoDevelopers from "./components/WhoDevelopers/WhoDevelopers";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Students from "./components/Students/Students";
import Courses from "./components/Courses/Courses";
import Learn from "./components/Learn/Learn";
import Result from "./components/Result/Result";
import { IdleTimerContainer } from "./components/IdleTimerContainer/IdleTimer";
import { Route, Routes } from "react-router-dom";

<<<<<<< HEAD
import {About} from "./pages/About/About";
import { Home } from "./pages/Home/Home";
function App() {
  return (
    <div className="app">
<Routes>
  <Route path="/*" element={ <Home/> } />
  <Route path="/about*" element={ <About />  } />
</Routes>
      
=======
function App() {
  return (
    <div className="app">



      <Header />
      <CourseAbout /> 
      <Students />
      <Tarif />
      <Info />
      <Footer />

      <Header />
      <CourseAbout />
      <WhoDevelopers />
      <CourseInfo />
      <Courses />
      <Learn />
      <Result />
      <Students />
      <Tarif />
      <Info />
      <Footer />
>>>>>>> a79b3738e3a2bb1b211ea122a7838ae8188f3875
      <IdleTimerContainer>
    </IdleTimerContainer>
    </div>
  );
}
export default App;
