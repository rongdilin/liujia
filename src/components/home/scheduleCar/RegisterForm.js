import React from 'react';
import { Form, Icon, Button, Collapse, Tabs, Card, Modal } from 'antd';
import ImageSection from "./collapsedForm/ImageSection";
import * as Styles from "./RegisterForm.Styles";
import SecondPanel from "./collapsedForm/SecondPanel";
import Localize from "../../../localization/Localize";

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            secPanel: true,
            thirdPanel: true,
            fourthPanel: true,
            activePanel: "firstPanel",
            carIndex: 0,
            selectedCar: null,
            selectedCarIndex: null,
            personInfo: null,
            carList: [
                "2012 VW Tourage",
                "2013 Dodge Aevenger SE",
                "2014 Honda Accord",
                "2014 Hyundai Elantra",
                "2014 VW Passat",
                "2015 Mercedes Benz C300",
                "2016 Subaru Legacy",
                "2017 BMW X5",
                "2017 Infinity QX30",
                "2017 Mercedes Benz GLE 350",
                "2017 Mini Cooper Countryman",
                "2017 Subaru Forester",
                "2017 Toyota Camry SE",
                "2018 Mercedes Benz C300 Convertible"
            ]
        };

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.showModal !== this.props.showModal){
            this.setState({showModal: nextProps.showModal});
        }
    }

    resetState = () => {
        this.setState({
            showModal: false,
            secPanel: true,
            thirdPanel: true,
            fourthPanel: true,
            activePanel: "firstPanel",
            carIndex: 0,
            selectedCarIndex: null,
            selectedCar: null,
            personInfo: null,
        })
    }

    handleCancel = () => {
        this.setState({ showModal: false });
        this.resetState();
        this.props.closeModal();
    }

    submitOrder = () => {
        this.props.submitOrder({
            personInfo: this.state.personInfo,
            selectedCar: this.state.selectedCar
        });
        this.resetState();
    }

    // handle panel switch
    saveFirstPanelInfo = () => {
        this.setState({ 
            secPanel: false, 
            activePanel: "secondPanel",
            selectedCar: this.state.carList[this.state.selectedCarIndex]
        });
    }
    saveSecPanelInfo = () => {
        this.setState({ thirdPanel: false, activePanel: "thirdPanel" });
    }
    saveThirdPanelInfo = () => {
        this.setState({ fourthPanel: false, activePanel: "fourthPanel" });
    }

    switchToFirstPanel = () => {
        this.setState({ activePanel: "firstPanel" });
    }

    switchToSecPanel = () => {
        this.setState({ activePanel: "secondPanel" });
    }

    switchToThirdPanel = () => {
        this.setState({ activePanel: "thirdPanel" });
    }

    // first panel
    slideLeft = () => {
        this.setState({ carIndex: this.state.carIndex - 2 });
    }

    slideRight = () => {
        this.setState({ carIndex: this.state.carIndex + 2 });
    }

    selectedCar = (index) => {
        this.setState({ selectedCarIndex: index === this.state.selectedCarIndex ? null : index });
    }

    // second panel
    secondPanelResult = (values) => {
        this.setState({ personInfo: values });
    }



    render() {
        let carList = this.state.carList;

        // first step
        let showLeftBorder = this.state.selectedCarIndex !== null && this.state.selectedCarIndex === this.state.carIndex ? { boxShadow: "0 0 5px 5px #4286f4" } : null;
        let showRightBorder = this.state.selectedCarIndex !== null && this.state.selectedCarIndex === this.state.carIndex + 1 ? { boxShadow: "0 0 5px 5px #4286f4" } : null;
        let leftButtonVisible = this.state.carIndex > 0 ? { float: "left" } : { display: "none" };
        let rightButtonVisible = this.state.carIndex < carList.length - 2 ? { float: "right" } : { display: "none" };

        let car_card = (
            <Card title="Choose your car" bordered={false}>

                <Styles.CarCardGrid style={showLeftBorder}>
                    <Button style={leftButtonVisible} type="primary" ghost={true} onClick={this.slideLeft}>
                        <Icon type="left" />
                    </Button>
                    <ImageSection
                        index={this.state.carIndex}
                        carName={carList[this.state.carIndex]}
                        selectedCar={this.selectedCar}
                    />
                </Styles.CarCardGrid>

                <Styles.CarCardGrid style={showRightBorder}>
                    <Button style={rightButtonVisible} type="primary" ghost={true} onClick={this.slideRight}>
                        <Icon type="right" />
                    </Button>
                    <ImageSection
                        index={this.state.carIndex + 1}
                        carName={carList[this.state.carIndex + 1]}
                        selectedCar={this.selectedCar}
                    />
                </Styles.CarCardGrid>
            </Card>
        );


        return (
            <Modal
                width={1000}
                visible={this.state.showModal}
                onCancel={this.handleCancel}
                footer="Friend, please make sure you choose the time you want!"
            >
                <Styles.FormTitle><b>Fill the schedule form</b></Styles.FormTitle>
                <Collapse accordion={true} defaultActiveKey="1" activeKey={this.state.activePanel}>
                    {/****** first panel: choose your car ******/}
                    <Panel header="First step: Choose your car" key="firstPanel">
                        <Form>
                            {car_card}
                        </Form>
                        <Button
                            type="primary"
                            disabled={this.state.selectedCarIndex !== null ? false : true}
                            onClick={this.saveFirstPanelInfo}>{Localize("nextStep", this.props.language)}
                        </Button>
                    </Panel>

                    {/****** second panel: fill your infomation ******/}
                    <Panel header="Second step: Fill your infomation" key="secondPanel" disabled={this.state.secPanel}>
                        <SecondPanel
                            saveSecPanelInfo={this.saveSecPanelInfo}
                            switchToFirstPanel={this.switchToFirstPanel}
                            getFormResult={this.secondPanelResult}
                            language={this.props.language}
                        />
                    </Panel>

                    {/****** third panel: choose your insurance ******/}
                    <Panel header="Third step: Choose your insurance" key="thirdPanel" disabled={this.state.thirdPanel}>
                        <Tabs
                            defaultActiveKey="1"
                            tabPosition="left"
                            style={{ height: 300 }}
                        >
                            <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                            <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                            <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                            <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                            <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                        </Tabs>
                        <Button style={{ marginRight: 10 }} type="primary" onClick={this.saveThirdPanelInfo}>Submit</Button>
                        <Button type="danger" onClick={this.switchToSecPanel}>Back to your chosen car</Button>
                    </Panel>

                    {/****** final panel: confirmation ******/}
                    <Panel header="Finished!" key="fourthPanel" disabled={this.state.fourthPanel}>
                        <div>
                            {Localize("finishForm1", this.props.language)}
                            <br />
                            {Localize("finishForm2", this.props.language)}
                        </div>
                        <br />
                        <br />
                        <Button style={{ marginRight: 10 }} type="primary" onClick={this.submitOrder}>{Localize("submit", this.props.language)}</Button>
                        <Button type="danger" onClick={this.switchToThirdPanel}>{Localize("backToLastLevel", this.props.language)}</Button>
                    </Panel>
                </Collapse>
            </Modal>
        );
    }
}

export default RegisterForm;