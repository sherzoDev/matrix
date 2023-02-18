import Header from "./components/Header/Header";
import CourseAbout from "./components/CourseAbout/CourseAbout";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Tarif from "./components/Tarif/Tarif";
import WhoDevelopers from "./components/WhoDevelopers/WhoDevelopers";
import CourseInfo from "./components/CourseInfo/CourseInfo";


function App() {
  return (
    <div className="app">

      <Header />
      <CourseAbout /> 
      <Tarif />
      <Info />
      <Footer />
      <Header />
      <CourseAbout />
      <WhoDevelopers />
      <CourseInfo />
    </div>
  );
}

export default App;
