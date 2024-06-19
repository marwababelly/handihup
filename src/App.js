import "./App.css";
import { Fragment } from "react";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router";
import Main from "./Pages/Main/Main";
import LogInPage from "./Pages/LogInPage/LogInPage";
import SignUpPage from "./Pages/SIgnUpPage/SignUpPage";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import AddProjectPage from "./Pages/AddProject_Product/AddProjectPage/AddProjectPage";
import Footer from "./component/Footer/Footer";
import ProjectDetails from "./Pages/Projects/ProjectDetails";
import Products from "./Pages/Products/Products";
import AddProductPage from "./Pages/AddProject_Product/AddProductPage/AddProductPage";

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
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/AddProduct" element={<AddProductPage />} />
          <Route path="/add-project-page" element={<AddProjectPage />} />
          <Route path="/Projects/:projectLink/Product" element={<Products />} />
          <Route
            path="/Projects/:projectLink/Product/:productLink"
            element={<ProjectDetails />}
          />
        </Routes>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
