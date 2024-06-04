import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import style from "./DashboardPage.module.css";
import UsersDashboard from "./PagesOfDashboard.js/UsersDashboard";
import ProjectsDashboard from "./PagesOfDashboard.js/ProjectsDashboard";
import ProductsDashboard from "./PagesOfDashboard.js/ProductsDashboard";
import CategoriesDashboard from "./PagesOfDashboard.js/CategoriesDashboard";
import ReviewsDashboard from "./PagesOfDashboard.js/ReviewsDashboard";
import ReportsDashboard from "./PagesOfDashboard.js/ReportsDashboard";
import BillsDashboard from "./PagesOfDashboard.js/BillsDashboard";

const DashboardPage = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="Users">
      <Row className={style.row}>
        <Col sm={2}>
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
        </Col>

        <Col sm={9}>
          <Tab.Content className={style.tab}>
            <Tab.Pane eventKey="Users">
              <h2>#User Dashboard:</h2>
              <UsersDashboard />
            </Tab.Pane>

            <Tab.Pane eventKey="projects">
              <h2>#Projects Dashboard:</h2>
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
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default DashboardPage;
