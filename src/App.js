import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Layout } from "antd";
import Home from "./components/home/Home";
import CompanyInfo from "./components/CompanyInfo";
import OwnerInfo from "./components/OwnerInfo";
import Navbar from "./components/navbar/Navbar";

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
      <div className="App">
        {/* navigation bar */}
        <Row style={{ background: "rgb(38, 38, 38)" }}>
          <Col offset={2} >
            <Navbar switchLanguage={this.switchLanguage} />
          </Col>
        </Row>
        {/* main content */}
        <Content>
          <Switch>
            <Route exact={true} path="/" component={() => <Home language={this.state.language}/>} />
            <Route exact={true} path="/company" component={CompanyInfo} />
            <Route exact={true} path="/owner" component={OwnerInfo} />
          </Switch>
        </Content>
        {/* footer */}
        <Row style={{ background: "rgb(38, 38, 38)", color: "rgb(255, 255, 255)", textAlign: "center", paddingBottom: 10 }}>
          <Col offset={2}>
            this is footer
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
