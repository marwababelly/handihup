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
import AddProject from "./component/AddProject/AddProject";
import Footer from "./component/Footer/Footer";
import ProjectDetails from "./Pages/Projects/ProjectDetails";
// import TestDetails from "./component/Test/TestDetails";
// import Test from "./component/Test/Test";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/LogIn" element={<LogInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Categories" element={<CategoriesPage />} />
          <Route path="/Dashbord" element={<DashbordPage />} />
          <Route path="/Other" element={<OtherPage />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/pottery" element={<ProjectDetails />} />
          <Route path="/skinCare" element={<ProjectDetails />} />
          <Route path="/fontArt" element={<ProjectDetails />} />
          <Route path="/chocolate" element={<ProjectDetails />} />
          {/* <Route path="/project/:id" element={<TestDetails />} /> */}
        </Routes>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
