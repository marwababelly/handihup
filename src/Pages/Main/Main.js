import React from "react";
import Overview from "../../component/Overview/Overview";
import AddProject from "../../component/AddProject/AddProject";
import Test from "../../component/Test";
import WhoWeAre from "../../component/WhoWeAre/WhoWeAre";
import Container from 'react-bootstrap/Container'

const Main = () => {
  return (
    <Container>
      <Overview />
      <div>
      <WhoWeAre/>
      </div>
      <AddProject />
      {/* <Test /> */}
    </Container>
  );
};

export default Main;
