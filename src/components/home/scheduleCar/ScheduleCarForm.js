import React from 'react';
import { Select, DatePicker, TimePicker, Form, Row } from "antd";
import BookButton from "./BookButton";
import * as Styles from "./RegisterForm.Styles";
import Localize from "../../../localization/Localize";

const { Option } = Select;
const FormItem = Form.Item;

class ScheduleCarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeslice: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00",
                "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
                "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
                "19:30", "20:00", "20:30", "21:00"],
            pickupStore: "",
            dropoffStore: "",
            pickupDate: "",
            dropoffDate: "",
            pickupTime: "",
            dropoffTime: "",
            showModal: false,
            orderTimeLocation: null,
            showReturnCarSelect: false
        }
    }

    selectPickup = (e) => {
        this.setState({ pickupStore: e });
    }

    selectDropoff = (e) => {
        this.setState({ dropoffStore: e });
    }

    resetState = () => {
        this.setState({
            showModal: false,
            orderTimeLocation: null
        })
    }

    submitOrder = (order) => {

        // console.log("order in client :", { order, orderTimeLocation: this.state.orderTimeLocation });
        fetch("http://localhost:4000/sendemail",
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, same-origin, *omit
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify({ order, orderTime: this.state.orderTimeLocation }) // body data type must match "Content-Type" header
            })
            .then(result => {
                console.log(result);
            });
        this.resetState();
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("data: ", values);
                this.setState({ showModal: true, orderTimeLocation: values });
            }
        });
    }

    showReturnCarSelect = () => {
        this.setState({showReturnCarSelect: true});
    }

    render() {
        let timeOptions = this.state.timeslice.map(time => <Option key={time} value={time}>{time}</Option>);
        const { getFieldDecorator } = this.props.form;

        return (
            <Styles.ScheduleCarForm onSubmit={this.handleSubmit} layout="inline" >
                <h3 style={{ color: "white" }}>{Localize("bookCar", this.props.language)}</h3>
                <div>
                    <Row gutter={12} onClick={this.showReturnCarSelect}>
                        {/****** pickup ******/}
                        <FormItem>
                            <div>
                                <div style={{ color: "white" }}>{Localize("pickup", this.props.language)}</div>
                                {getFieldDecorator('pickup', {
                                    rules: [{
                                        type: 'string', message: `${Localize("inputNotValid", this.props.language)} ${Localize("pickup", this.props.language)}`,
                                    }, {
                                        required: true, message: `${Localize("plzSelect", this.props.language)} ${Localize("pickup", this.props.language)}`,
                                    }],
                                })(
                                    <Select size="large" style={{ width: 280 }} onChange={this.selectPickup}>
                                        <Option value="seattle">{Localize("seattle", this.props.language)}</Option>
                                        <Option value="lynwood">{Localize("lynwood", this.props.language)}</Option>
                                        <Option value="la">{Localize("la", this.props.language)}</Option>
                                    </Select >
                                )}
                            </div>
                        </FormItem>
                        {/****** pickup date ******/}
                        <FormItem style={{ color: "white" }}>
                            <div style={{ width: 200 }}>
                                <div>{Localize("pickupDate", this.props.language)}</div>
                                {getFieldDecorator('pickupDate', {
                                    rules: [{
                                        type: 'object', message: `${Localize("inputNotValid", this.props.language)} ${Localize("pickupDate", this.props.language)}`,
                                    }, {
                                        required: true, message: `${Localize("plzSelect", this.props.language)} ${Localize("pickupDate", this.props.language)}`,
                                    }],
                                })(
                                    <DatePicker size="large" style={{ width: 200 }} placeholder={Localize("selectedDate", this.props.language)} />
                                )}
                            </div>
                        </FormItem>
                        {/****** pickup time ******/}
                        <FormItem style={{ color: "white" }}>
                            <div style={{ width: 150 }}>
                                <div>{Localize("pickupTime", this.props.language)}</div>
                                {getFieldDecorator('pickupTime', {
                                    rules: [{
                                        required: true, message: `${Localize("plzSelect", this.props.language)} ${Localize("pickupTime", this.props.language)}`,
                                    }],
                                })(
                                    <Select size="large" style={{ width: 100 }}>
                                        {timeOptions}
                                    </Select>
                                    // [TODO]: update timePicker
                                    // <TimePicker size="large" style={{ width: 150 }} use12Hours format="HH:mm a" placeholder=""/>
                                )}
                            </div>
                        </FormItem>
                    </Row>
                    <Row gutter={12} style={{ display: this.state.showReturnCarSelect ? "block" : "none" }}>
                        {/****** dropoff ******/}
                        <FormItem style={{ color: "white" }}>
                            <div>
                                <div>{Localize("dropoff", this.props.language)}</div>
                                {getFieldDecorator('dropoff', {
                                    rules: [{
                                        required: true, message: `${Localize("plzSelect", this.props.language)} ${Localize("dropoff", this.props.language)}`,
                                    }],
                                })(
                                    <Select size="large" style={{ width: 280 }} onChange={this.selectDropoff}>
                                        <Option value="seattle">{Localize("seattle", this.props.language)}</Option>
                                        <Option value="lynwood">{Localize("lynwood", this.props.language)}</Option>
                                        <Option value="la">{Localize("la", this.props.language)}</Option>
                                    </Select >
                                )}
                            </div>
                        </FormItem>
                        {/****** dropoff date ******/}
                        <FormItem style={{ color: "white" }}>
                            <div style={{ width: 200 }}>
                                <div>{Localize("dropoffDate", this.props.language)}</div>
                                {getFieldDecorator('dropoffDate', {
                                    rules: [{
                                        type: 'object', message: `${Localize("inputNotValid", this.props.language)} ${Localize("dropoffDate", this.props.language)}`,
                                    }, {
                                        required: true, message: `${Localize("plzSelect", this.props.language)} ${Localize("dropoffDate", this.props.language)}`,
                                    }],
                                })(
                                    <DatePicker size="large" style={{ width: 200 }} placeholder={Localize("selectedDate", this.props.language)} />
                                )}
                            </div>
                        </FormItem>
                        {/****** dropoff time ******/}
                        <FormItem style={{ color: "white" }}>
                            <div style={{ width: 100 }}>
                                <div>{Localize("dropoffTime", this.props.language)}</div>
                                {getFieldDecorator('dropoffTime', {
                                    rules: [{
                                        required: true, message: `${Localize("plzSelect", this.props.language)} ${Localize("dropoffTime", this.props.language)}`,
                                    }],
                                })(
                                    <Select size="large" style={{ width: 100 }}>
                                        {timeOptions}
                                    </Select>
                                )}
                            </div>
                        </FormItem>
                    </Row>
                </div>
                <FormItem>
                    <BookButton
                        showModal={this.state.showModal}
                        closeModal={this.closeModal}
                        openModal={this.openModal}
                        submitOrder={this.submitOrder}
                        language={this.props.language}
                        orderTimeLocation={this.state.orderTimeLocation ? this.state.orderTimeLocation : null}
                    />
                </FormItem>
            </Styles.ScheduleCarForm>
        );
    }
}
ScheduleCarForm = Form.create({})(ScheduleCarForm);

export default ScheduleCarForm;
