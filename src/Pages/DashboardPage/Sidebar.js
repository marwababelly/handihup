import React from "react";
import { ListGroup, Row, Tab, Col } from "react-bootstrap";
import style from "./Slidebar.module.css";

const Sidebar = () => {
  return (
    <Tab.Container
      className={style.tabContainer}
      id="list-group-tabs-example"
      defaultActiveKey="#link1"
    >
      <Row className={style.row}>
        <Col sm={2}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Users
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Projects
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">Tab pane users</Tab.Pane>
            <Tab.Pane eventKey="#link2">Tab pane projects 2</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Sidebar;
