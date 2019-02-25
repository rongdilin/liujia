import React from 'react';
import { Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import SwitchLanguage from "./SwitchLanguage";
import Localize from "../../localization/Localize";
import * as Styles from "./Navbar.Styles";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "CN"
        }
    }
    switchLanguage = (val) => {
        this.setState({ language: val });
        this.props.switchLanguage(val);
    }

    render() {
        return (
            <div style={{display: "flex"}}>
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <div>
                        <Avatar style={{ marginTop: 10, marginBottom: 10 }} size={70} alt="company logo" src={require("../../assets/companyLogo.gif")} />
                    </div>
                    <div>
                        <Styles.Header> J & G Rental</Styles.Header>
                    </div>
                    <div>
                        {/* [TODO]: need to add new pages */}
                        <Menu mode="horizontal" style={{ background: "rgb(38, 38, 38)" }}>
                            <Menu.Item key="/" ><Link to="/" style={{ color: "rgb(255, 255, 255)" }}>{Localize("home", this.state.language)}</Link></Menu.Item>
                            <Menu.Item key="/location"><Link to="/location" style={{ color: "rgb(255, 255, 255)" }}>{Localize("location", this.state.language)}</Link></Menu.Item>
                            <Menu.Item key="/cars"><Link to="/cars" style={{ color: "rgb(255, 255, 255)" }}>{Localize("cars", this.state.language)}</Link></Menu.Item>
                            <Menu.Item key="/service"><Link to="/services" style={{ color: "rgb(255, 255, 255)" }}>{Localize("services", this.state.language)}</Link></Menu.Item>
                            <Menu.Item key="/connectUs"><Link to="/connectUs" style={{ color: "rgb(255, 255, 255)" }}>{Localize("connectUs", this.state.language)}</Link></Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div style={{float: "right", marginTop: "2em", marginRight: 10}}>
                    <SwitchLanguage switchLanguage={this.switchLanguage} />
                </div>
            </div>

        );
    }
}

export default Navbar;
