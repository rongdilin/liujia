import React from 'react';
import { Radio } from "antd";
import * as Styles from "./Navbar.Styles";

const RadioGroup = Radio.Group;

class SwitchLanguage extends React.Component {
    switchLanguage = (e) => {
        this.props.switchLanguage(e.target.value);
    }
    render() {
        return (
            <RadioGroup defaultValue="CN" onChange={this.switchLanguage}>
                <Styles.RadioButton value="CN">简体中文</Styles.RadioButton>
                <Styles.RadioButton value="EN">English</Styles.RadioButton>
            </RadioGroup>
        );
    }
}

export default SwitchLanguage;
