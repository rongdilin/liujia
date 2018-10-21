import React from 'react';
import { Radio } from "antd";

const RadioGroup = Radio.Group;

class SwitchLanguage extends React.Component {
    switchLanguage = (e) => {
        this.props.switchLanguage(e.target.value);
    }
    render() {
        return (
            <div>
                <RadioGroup defaultValue="CN" onChange={this.switchLanguage}>
                    <Radio.Button style={{background: "rgb(38, 38, 38)", color: "rgb(255, 255, 255)" }} value="CN">简体中文</Radio.Button>
                    <Radio.Button style={{background: "rgb(38, 38, 38)", color: "rgb(255, 255, 255)" }} value="EN">English</Radio.Button>
                </RadioGroup>
            </div>
        );
    }
}

export default SwitchLanguage;
