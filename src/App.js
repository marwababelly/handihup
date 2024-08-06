import "./App.css";
import { Fragment } from "react";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router";
import Main from "./Pages/Main/Main";
import LogInPage from "./Pages/LogInPage/LogInPage";
import SignUpPage from "./Pages/SIgnUpPage/SignUpPage";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import CategoryList from "./Pages/CategoriesPage/Categories";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import AddProjectPage from "./Pages/AddProject_Product/AddProjectPage/AddProjectPage";
import Footer from "./component/Footer/Footer";
import ProjectDetails from "./Pages/Projects/ProjectDetails";
import Products from "./Pages/Products/Products";
import AddProductPage from "./Pages/AddProject_Product/AddProductPage/AddProductPage";
import OwnerPage from "./Pages/OwnerPage/OwnerPage";
import { AuthProvider } from ".//Context/AuthContext";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Fragment>
      <div className="App">
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/LogIn" element={<LogInPage />} />
            <Route path="/SignUp" element={<SignUpPage />} />
            <Route path="/Projects" element={<ProjectsPage />} />
            <Route path="/Owner" element={<OwnerPage />} />
            <Route path="/Projects/:categoryTitle" element={<CategoryList />} />
            <Route path="/Categories" element={<CategoriesPage />} />
            <Route path="/Dashboard" element={<DashboardPage />} />
            <Route path="/AddProduct" element={<AddProductPage />} />
            <Route path="/add-project-page" element={<AddProjectPage />} />
            <Route path="/Projects/:projectId/Product" element={<Products />} />
            <Route
              path="/Projects/:projectId/Product/:productId"
              element={<ProjectDetails />}
            />
            <Route path="/OwnerPage/:ownerOfProject" element={<OwnerPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </div>
    </Fragment>
  );
}

export default App;
