import React from "react";
import Overview from "../../component/Overview/Overview";
import AddProject from "../../component/AddProject/AddProject";
import WhoWeAre from "../../component/WhoWeAre/WhoWeAre";
import Container from "react-bootstrap/Container";

const Main = () => {
  return (
    <Container>
      <Overview />
      <div>
        <WhoWeAre />
      </div>
      <AddProject />
    </Container>
  );
};

export default Main;
