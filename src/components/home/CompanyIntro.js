import React from 'react';
import { Row, Col, Divider } from "antd";

class CompanyIntro extends React.Component {
    render() {
        return (
            < Row style={{ textAlign: "center" }}>
                <Col offset={2} span={12}>
                    <h2>公司简介</h2>
                    <h3>
                        J&G CAR RENTAL是西雅图地区首家华人租车行
                            <br />
                        现拥有北西雅图和西雅图downtown及纽约长岛三家租车行
                            <br />
                        本公司拥有百万商业保险，绝对保障您的出行安全
                            <br />
                        多种类型车辆 供您选择
                            <br />
                        西雅图地区支持不同门店还车服务
                    </h3>
                    <Divider />
                    <h2>支付方式</h2>
                    <img style={{ width: "60%", height: "auto" }} alt="payment" src={require("../../assets/payment.png")} />
                </Col>

                <Col>
                    <img alt="guaranteed" src={require("../../assets/guaranteed.gif")} />
                </Col>
            </Row >
        );
    }
}

export default CompanyIntro;
