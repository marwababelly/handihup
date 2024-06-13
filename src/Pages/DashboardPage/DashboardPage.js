import React from "react";
import { Nav, Row, Tab } from "react-bootstrap";
import style from "./DashboardPage.module.css";
import UsersDashboard from "./PagesOfDashboard.js/UsersDashboard";
import ProjectsDashboard from "./PagesOfDashboard.js/ProjectsDashboard";
import ProductsDashboard from "./PagesOfDashboard.js/ProductsDashboard";
import CategoriesDashboard from "./PagesOfDashboard.js/CategoriesDashboard";
import ReviewsDashboard from "./PagesOfDashboard.js/ReviewsDashboard";
import ReportsDashboard from "./PagesOfDashboard.js/ReportsDashboard";
import BillsDashboard from "./PagesOfDashboard.js/BillsDashboard";
import { DataTableProvider } from "../../Context/context";

const DashboardPage = () => {
  // const initialData = [
  //   { id: 1, name: "Alice", email: "alice@example.com" },
  //   { id: 2, name: "Bob", email: "bob@example.com" },
  // ];
  return (
    <DataTableProvider>
      <Tab.Container id="left-tabs-example" defaultActiveKey="Users">
        <Row className={style.row}>
          <div className={style.col1}>
            <Nav className={style.nav}>
              <Nav.Item className={style.navItem}>
                <Nav.Link eventKey="Users">User Dashboard</Nav.Link>
              </Nav.Item>

              <Nav.Item className={style.navItem}>
                <Nav.Link eventKey="projects">Project Dashboard</Nav.Link>
              </Nav.Item>

              <Nav.Item className={style.navItem}>
                <Nav.Link eventKey="Products">Products Dashboard</Nav.Link>
              </Nav.Item>

              <Nav.Item className={style.navItem}>
                <Nav.Link eventKey="Categories">Categories Dashboard</Nav.Link>
              </Nav.Item>

              <Nav.Item className={style.navItem}>
                <Nav.Link eventKey="Reviews">Reviews Dashboard</Nav.Link>
              </Nav.Item>

              <Nav.Item className={style.navItem}>
                <Nav.Link eventKey="Reports">Reports Dashboard</Nav.Link>
              </Nav.Item>

              <Nav.Item className={style.navItem}>
                <Nav.Link eventKey="Bills">Bills Dashboard</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <div className={style.col2}>
            <Tab.Content className={style.tab}>
              <Tab.Pane eventKey="Users">
                <h2>#User Dashboard:</h2>
                <UsersDashboard />
              </Tab.Pane>

              <Tab.Pane eventKey="projects">
                <h2>#projects Dashboard:</h2>
                <ProjectsDashboard />
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
