import "./App.css";
import { Fragment } from "react";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import ProjectsPage from "./Pages/ProjectsPage";
import CategoriesPage from "./Pages/CategoriesPage";
import DashbordPage from "./Pages/DashbordPage";
import OtherPage from "./Pages/OtherPage";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Routes>
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
