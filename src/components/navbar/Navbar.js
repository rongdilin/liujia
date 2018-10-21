import React from 'react';
import { Row, Col, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import SwitchLanguage from "./SwitchLanguage";
import Localize from "../../localization/Localize";

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            language: "CN"
        }
    }
    switchLanguage = (val) => {
        this.setState({language: val});
        this.props.switchLanguage(val);
    }

    render() {
        return (
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Avatar style={{ marginTop: 10, marginBottom: 10 }} size={70} alt="company logo" src={require("../../assets/companyLogo.gif")} />
                <h2 style={{ marginLeft: 10, marginTop: 20, marginRight: 100, color: "rgb(255, 255, 255)" }}> J & G Rental Car</h2>
                <Menu mode="horizontal" style={{ background: "rgb(38, 38, 38)" }}>
                    <Menu.Item key="/" ><Link to="/" style={{ color: "rgb(255, 255, 255)" }}>{Localize("home", this.state.language)}</Link></Menu.Item>
                    {/* <Menu.Item key="/company"><Link to="/company" style={{ color: "rgb(255, 255, 255)" }}>{Localize("company", this.props.language)}</Link></Menu.Item> */}
                    {/* <Menu.Item key="/owner"><Link to="/owner" style={{ color: "rgb(255, 255, 255)" }}>{Localize("company", this.props.language)}Owner</Link></Menu.Item> */}
                </Menu>
                <Col offset={4}>
                    <SwitchLanguage switchLanguage={this.switchLanguage}/>
                </Col>
            </Row>

        );
    }
}

export default Navbar;
