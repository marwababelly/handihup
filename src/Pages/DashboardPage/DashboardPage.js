import React from "react";
import { Nav, Row, Tab } from "react-bootstrap";
import style from "./DashboardPage.module.css";
import UsersDashboard from "./PagesOfDashboard.js/UsersDashboard";
import ProjectDashboard from "./PagesOfDashboard.js/ProjectsDashboard";
import ProductsDashboard from "./PagesOfDashboard.js/ProductsDashboard";
import CategoriesDashboard from "./PagesOfDashboard.js/CategoriesDashboard";
import ReviewsDashboard from "./PagesOfDashboard.js/ReviewsDashboard";
import ReportsDashboard from "./PagesOfDashboard.js/ReportsDashboard";
import BillsDashboard from "./PagesOfDashboard.js/BillsDashboard";
import { DataTableProvider } from "../../Context/context";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  // const { state } = useContext(AuthContext);
  // const { user, userRole } = state;

  const { user, userRole } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   console.log("user is ", state.user);
  //   console.log(state.userRole);
  // }, [state]);

  // if (!user || !userRole) {
  //   return <div>You are not authenticated. Please log in.</div>;
  // }

  console.log("user is ", user);
  console.log(userRole);

  console.log(AuthContext);
  return (
    <DataTableProvider>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={userRole === "admin" ? "Users" : "projects"}
      >
        <Row className={style.row}>
          <div className={style.col1}>
            <Nav className={style.nav}>
              {userRole === "admin" && (
                <>
                  <Nav.Item className={style.navItem}>
                    <Nav.Link eventKey="Users">Admin Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={style.navItem}>
                    <Nav.Link eventKey="Reports">Reports Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={style.navItem}>
                    <Nav.Link eventKey="Bills">Bills Dashboard</Nav.Link>
                  </Nav.Item>
                </>
              )}
              {userRole === "owner" && (
                <>
                  <Nav.Item className={style.navItem}>
                    <Nav.Link eventKey="projects">Project Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={style.navItem}>
                    <Nav.Link eventKey="Products">Products Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={style.navItem}>
                    <Nav.Link eventKey="Reviews">Reviews Dashboard</Nav.Link>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </div>

          <div className={style.col2}>
            <Tab.Content className={style.tab}>
              <Tab.Pane eventKey="Users">
                <h2>#Admin Dashboard:</h2>
                <UsersDashboard />
              </Tab.Pane>

              <Tab.Pane eventKey="projects">
                <h2>#projects Dashboard:</h2>
                <ProjectDashboard />
              </Tab.Pane>

              <Tab.Pane eventKey="Products">
                <h2>#Products Dashboard:</h2>
                <ProductsDashboard />
              </Tab.Pane>

              <Tab.Pane eventKey="Categories">
                <h2>#Categories Dashboard:</h2>

                <CategoriesDashboard />
              </Tab.Pane>

              <Tab.Pane eventKey="Reviews">
                <h2>#Reviews Dashboard:</h2>
                <ReviewsDashboard />
              </Tab.Pane>

              <Tab.Pane eventKey="Reports">
                <h2>#Reports Dashboard:</h2>
                <ReportsDashboard />
              </Tab.Pane>

              <Tab.Pane eventKey="Bills">
                <h2>#Bills Dashboard:</h2>
                <BillsDashboard />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Row>
      </Tab.Container>
    </DataTableProvider>
  );
};

export default DashboardPage;
