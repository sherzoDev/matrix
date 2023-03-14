import "./index.css";
import Admin from "./pages/Admin/Admin";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { GlobalStyle } from "./assets/styles/Global.styles";

function App() {
  return (
    <div className="app">
      <Admin />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {localStorage.getItem("token") ? (
          <Route path="/admin*" element={<Admin />} />
        ) : (
          ""
        )}
      </Routes>
      <GlobalStyle />
    </div>
  );
}
export default App;
