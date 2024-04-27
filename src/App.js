import "./App.css";
import { Fragment } from "react";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router";
import Main from "./Pages/Main/Main";
import LogInPage from "./Pages/LogInPage/LogInPage";
import SignUpPage from "./Pages/SIgnUpPage/SignUpPage";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import DashbordPage from "./Pages/DashbordPage/DashbordPage";
import OtherPage from "./Pages/OtherPage";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Home" element={<Main />} />
          <Route path="/LogIn" element={<LogInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Categories" element={<CategoriesPage />} />
          <Route path="/Dashbord" element={<DashbordPage />} />
          <Route path="/Other" element={<OtherPage />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
