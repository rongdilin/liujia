import React from 'react';
import { Button } from "antd";
import RegisterForm from "./RegisterForm";
import Localize from "../../../localization/Localize";

class BookButton extends React.Component {
    openModal = () => {
        this.props.openModal();
    }

    closeModal = () => {
        this.props.closeModal();
    }

    submitOrder = (order) => {
        this.props.submitOrder(order);
    }

    render() {
        return (
            <div style={{ marginTop: "50px" }}>
                <Button size="large" type="primary" htmlType="submit">{Localize("bookCarButton", this.props.language)}</Button>
                <RegisterForm
                    submitOrder={this.submitOrder}
                    showModal={this.props.showModal}
                    closeModal={this.closeModal}
                    language={this.props.language}
                    orderTimeLocation={this.props.orderTimeLocation}
                />
            </div>
        );
    }
}

export default BookButton;
