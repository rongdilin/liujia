import React from 'react';
import { Row, Col } from "antd";
import Localize from "../../localization/Localize";

class Partner extends React.Component {
    render() {
        return (
            < Row style={{ textAlign: "center", background: "rgb(38, 38, 38)", paddingTop: 20, paddingBottom: 20 }}>
                <Col offset={2}>
                    <h2 style={{ color: "rgb(255, 255, 255)" }}>{Localize("partner", this.props.language)}</h2>
                    <img style={{ marginRight: 5 }} alt="zuzuche" src={require("../../assets/zuzuche.gif")} />
                    <img style={{ marginRight: 5 }} alt="xiecheng" src={require("../../assets/xiecheng.gif")} />
                    <img style={{ marginRight: 5 }} alt="turo" src={require("../../assets/turo.png")} />
                    <img style={{ marginRight: 5 }} alt="paypal" src={require("../../assets/paypal.png")} />
                    <img style={{ marginRight: 5 }} alt="carpapapa" src={require("../../assets/carpapapa.jpg")} />
                    <img alt="premium" src={require("../../assets/premium.png")} />
                </Col>
            </Row >
        );
    }
}

export default Partner;
