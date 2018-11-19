import React from 'react';
import { Layout, Row, Col, Divider } from "antd";
// import CarCardBar from "./CarCardBar";
import CompanyIntro from './CompanyIntro';
import Partner from "./Partner";
import ScheduleCarForm from './scheduleCar/ScheduleCarForm';
import Localize from "../../localization/Localize";

const { Content } = Layout;

class Home extends React.Component {
    render() {
        return (
            <Content>
                <Row type="flex" justify="start" style={{
                    backgroundImage: `url(${require("../../assets/background2.gif")})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
                    <Col offset={2}>
                        <ScheduleCarForm language={this.props.language}/>
                    </Col>
                </Row>
                <Divider />
                <Row style={{ textAlign: "center" }}>
                    <h2><b>{Localize("firstRental", this.props.language)}</b></h2>
                    <h3><b>{Localize("slogan", this.props.language)}</b></h3>
                </Row>
                <Divider />
                {/* <Row style={{ background: "rgb(38, 38, 38)" }}>
                    <Col offset={2}>
                        <CarCardBar />
                    </Col>
                </Row>
                <Divider /> */}
                <CompanyIntro />
                <Divider />
                <Partner language={this.props.language}/>
            </Content>
        );
    }
}

export default Home;
