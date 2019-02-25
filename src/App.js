import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Layout, Divider } from "antd";
import Home from "./components/home/Home";
import CompanyInfo from "./components/CompanyInfo";
import OwnerInfo from "./components/OwnerInfo";
import Navbar from "./components/navbar/Navbar";
import Partner from "./components/home/Partner";

const { Content } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "CN"
    }
  }
  switchLanguage = (val) => {
    this.setState({ language: val });
  }
  render() {
    return (
      <div className="App" >
        {/* navigation bar */}
        <div style={{ background: "rgb(38, 38, 38)" }}>
          <Col offset={2} >
            <Navbar switchLanguage={this.switchLanguage} />
          </Col>
        </div>
        {/* main content */}
        <Content>
          <Switch>
            {/* [TODO]: need add more routes */}
            <Route exact={true} path="/" component={() => <Home language={this.state.language} />} />
            <Route exact={true} path="/location" component={CompanyInfo} />
            <Route exact={true} path="/owner" component={OwnerInfo} />
          </Switch>
        </Content>
        {/* footer */}
        <Divider />
        <Partner language={this.state.language}/>
        <Row style={{ background: "rgb(38, 38, 38)", color: "rgb(255, 255, 255)", textAlign: "center", paddingBottom: 10, fontSize: 11}}>
          <Col offset={2}>
            @ RL 2018
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
