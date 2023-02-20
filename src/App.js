import Header from "./components/Header/Header";
import CourseAbout from "./components/CourseAbout/CourseAbout";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Tarif from "./components/Tarif/Tarif";
import WhoDevelopers from "./components/WhoDevelopers/WhoDevelopers";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Courses from "./components/Courses/Courses";
import Learn from "./components/Learn/Learn";
import Result from "./components/Result/Result";

function App() {
  return (
    <div className="app">
      <Header />
      <CourseAbout />
      <WhoDevelopers />
      <CourseInfo />
      <Courses />
      <Learn />
      <Result />
      <Tarif />
      <Info />
      <Footer />
    </div>
  );
}
export default App;
