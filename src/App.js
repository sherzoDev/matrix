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
<<<<<<< HEAD
import Admin from "./pages/Admin/Admin";
=======
import { Route, Routes, useNavigate } from "react-router-dom";
import { Admin } from "./pages/Admin/Admin";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { GlobalStyle } from "./assets/styles/Global.styles";
>>>>>>> 8cea4e69c2b2968549f2fa887c732c3310170690

function App() {
  const navigate = useNavigate()
  return (
    <div className="app">
<<<<<<< HEAD
      <Admin />
=======
      
    	<Routes>
				<Route path='/' element={<Home /> } />
				<Route path='/login' element={<Login /> } />
			{localStorage.getItem("token") ?  <Route path='/admin*' element={ <Admin/>} /> : ""}
	
			</Routes>
      <GlobalStyle/>
>>>>>>> 8cea4e69c2b2968549f2fa887c732c3310170690
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
      <IdleTimerContainer></IdleTimerContainer>
    </div>
  );
}
export default App;
