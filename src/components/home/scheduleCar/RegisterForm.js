import React from 'react';
import moment from 'moment';
import { Form, Icon, Button, Collapse, Tabs, Card, Modal, Steps, Divider } from 'antd';
import ImageSection from "./collapsedForm/ImageSection";
import * as Styles from "./RegisterForm.Styles";
import SecondPanel from "./collapsedForm/SecondPanel";
import Localize from "../../../localization/Localize";

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
const Step = Steps.Step;

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
            ],
            firstProcessState: "finish",
            secProcessState: "process",
            thirdProcessState: "wait",
            fourProcessState: "wait"
        };

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.showModal !== this.props.showModal) {
            this.setState({ showModal: nextProps.showModal });
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
            selectedCar: this.state.carList[this.state.selectedCarIndex],
            secProcessState: "finish",
            thirdProcessState: "process"
        });
    }
    saveSecPanelInfo = () => {
        this.setState({ 
            thirdPanel: false,
            activePanel: "thirdPanel",
            thirdProcessState: "finish",
            fourProcessState: "process"
        });
    }
    saveThirdPanelInfo = () => {
        this.setState({ 
            fourthPanel: false, 
            activePanel: "fourthPanel",
            fourProcessState: "finish"
        });
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
            <Card bordered={false}>

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

        let orderTimeLocation = this.props.orderTimeLocation ? 
        (
        <div>
            <div style={{ display: "flex" }}>
                <Card title={Localize("pickup", this.props.language)} style={{ width: 300 }} bordered={false}>
                    <p>{Localize(this.props.orderTimeLocation.pickup, this.props.language)}</p>
                    <p>{moment(this.props.orderTimeLocation.pickupDate).format('ll')}</p>
                    <p>{this.props.orderTimeLocation.pickupTime}</p>
                </Card>
                <Card title={Localize("dropoff", this.props.language)} style={{ width: 300 }} bordered={false}>
                    <p>{Localize(this.props.orderTimeLocation.dropoff, this.props.language)}</p>
                    <p>{moment(this.props.orderTimeLocation.dropoffDate).format('ll')}</p>
                    <p>{this.props.orderTimeLocation.dropoffTime}</p>
                </Card>
            </div>
            <Divider />
        </div>
        ) : null;

        return (
            <Modal
                width={1000}
                visible={this.state.showModal}
                onCancel={this.handleCancel}
                footer={Localize("reminder", this.props.language)}
            >
                {/****** process bar ******/}
                <Steps style={{ margin: "20px 0" }} progressDot>
                    <Step status={this.state.firstProcessState} title={Localize("selectTimeLocation", this.props.language)} />
                    <Step status={this.state.secProcessState} title={Localize("selectCar", this.props.language)} />
                    <Step status={this.state.thirdProcessState} title={Localize("selectInsurance", this.props.language)} />
                    <Step status={this.state.fourProcessState} title={Localize("checkOrder", this.props.language)} />
                </Steps>
                {/****** order time and location ******/}
                {orderTimeLocation}
                {/****** order detail ******/}
                <Collapse accordion={true} defaultActiveKey="1" activeKey={this.state.activePanel}>
                    {/****** first panel: choose your car ******/}
                    <Panel header={Localize("firstPanelHeader", this.props.language)} key="firstPanel">
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
                    <Panel header={Localize("SecPanelHeader", this.props.language)} key="secondPanel" disabled={this.state.secPanel}>
                        <SecondPanel
                            saveSecPanelInfo={this.saveSecPanelInfo}
                            switchToFirstPanel={this.switchToFirstPanel}
                            getFormResult={this.secondPanelResult}
                            language={this.props.language}
                        />
                    </Panel>

                    {/****** third panel: choose your insurance ******/}
                    <Panel header={Localize("ThirdPanelHeader", this.props.language)} key="thirdPanel" disabled={this.state.thirdPanel}>
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
                    <Panel header={Localize("finished", this.props.language)} key="fourthPanel" disabled={this.state.fourthPanel}>
                        <div>
                            {Localize("finishForm1", this.props.language)}
                            <br />
                            {Localize("finishForm2", this.props.language)}
                            <br />
                            <div style={{ color: "red", marginTop: 50 }}>{Localize("plzRead", this.props.language)}</div>
                            <div><a href={require(`../../../assets/agreement/J&G Rental Car 收费高速价格表.pdf`)} download>{Localize("highwayPay", this.props.language)}</a></div>
                            <div><a href={require(`../../../assets/agreement/J&G Rental Car 美国行车注意事项.pdf`)} download>{Localize("driveHelp", this.props.language)}</a></div>
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