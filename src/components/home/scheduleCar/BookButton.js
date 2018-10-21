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
            <div style={{ marginTop: "20px" }}>
                <Button type="primary" htmlType="submit">{Localize("bookCarButton", this.props.language)}</Button>
                <RegisterForm
                    submitOrder={this.submitOrder}
                    showModal={this.props.showModal}
                    closeModal={this.closeModal}
                    language={this.props.language}
                />
            </div>
        );
    }
}

export default BookButton;
