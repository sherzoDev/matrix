import Header from "./components/Header/Header";
import CourseAbout from "./components/CourseAbout/CourseAbout";
import "./index.css";
import WhoDevelopers from "./components/WhoDevelopers/WhoDevelopers";
import CourseInfo from "./components/CourseInfo/CourseInfo";

function App() {
  return (
    <div className="app">
      <Header />
      <CourseAbout />
      <WhoDevelopers />
      <CourseInfo />
    </div>
  );
}

export default App;
