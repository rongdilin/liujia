import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Checkbox, Button, DatePicker } from 'antd';
import Localize from "../../../../localization/Localize";

const FormItem = Form.Item;
const Option = Select.Option;


class SecondPanel extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.saveSecPanelInfo();
                this.props.getFormResult(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} style={{ width: 300 }}>
                <FormItem label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: `${Localize("inputNotValid", this.props.language)} E-mail`,
                        }, {
                            required: true, message: `${Localize("plzInput", this.props.language)} E-mail`,
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label={Localize("firstName", this.props.language)}>
                    {getFieldDecorator('firstName', {
                        rules: [{
                            type: 'string', message: `${Localize("inputNotValid", this.props.language)} ${Localize("firstName", this.props.language)}`,
                        }, {
                            required: true, message: `${Localize("plzInput", this.props.language)} ${Localize("firstName", this.props.language)}`,
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label={Localize("lastName", this.props.language)}>
                    {getFieldDecorator('lastName', {
                        rules: [{
                            type: 'string', message: `${Localize("inputNotValid", this.props.language)} ${Localize("lastName", this.props.language)}`,
                        }, {
                            required: true, message: `${Localize("plzInput", this.props.language)} ${Localize("lastName", this.props.language)}`,
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label={Localize("phoneNumber", this.props.language)}>
                    {getFieldDecorator('phoneNumber', {
                        rules: [{
                            // number not work here
                            type: 'string', message: `${Localize("inputNotValid", this.props.language)} ${Localize("phoneNumber", this.props.language)}`,
                        }, {
                            required: true, message: `${Localize("plzInput", this.props.language)} ${Localize("phoneNumber", this.props.language)}`,
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label={Localize("dob", this.props.language)}>
                    {getFieldDecorator('dob')(
                        <DatePicker style={{ width: 300 }} placeholder={Localize("selectedDate", this.props.language)} />
                    )}
                </FormItem>
                <FormItem label={Localize("driverLicense", this.props.language)}>
                    {getFieldDecorator('driverLicense', {
                        rules: [{
                            type: 'string', message: `${Localize("inputNotValid", this.props.language)} ${Localize("driverLicense", this.props.language)}`,
                        }, {
                            required: true, message: `${Localize("plzInput", this.props.language)} ${Localize("driverLicense", this.props.language)}`,
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label={(
                    <span>
                        {Localize("airlineNumber", this.props.language)}&nbsp;
                            <Tooltip title={Localize("airlineTooltip", this.props.language)}>
                            <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                )}>
                    {getFieldDecorator('airlineNumber', {
                        rules: [{
                            type: 'string', message: `${Localize("inputNotValid", this.props.language)} ${Localize("airlineNumber", this.props.language)}`,
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label={Localize("residence", this.props.language)}>
                    {getFieldDecorator('residence', {
                        rules: [{
                            type: 'string', message: `${Localize("inputNotValid", this.props.language)} ${Localize("residence", this.props.language)}`,
                        }],
                    })(
                        <Select>
                            <Option value="CN">{Localize("China", this.props.language)}</Option>
                            <Option value="US">{Localize("US", this.props.language)}</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('agreement', {
                        rules: [{
                            required: true, message: Localize("plzReadAgreement", this.props.language),
                        }],
                    })(
                        <Checkbox>{Localize("IHaveRead", this.props.language)} <a href="">{Localize("agreement", this.props.language)}</a></Checkbox>
                    )}
                </FormItem>
                <FormItem>
                    <Button style={{ marginRight: 10 }} type="primary" htmlType="submit">{Localize("submit", this.props.language)}</Button>
                    <Button type="danger" onClick={this.props.switchToFirstPanel}>{Localize("backToLastLevel", this.props.language)}</Button>
                </FormItem>
            </Form>
        );
    }
}

SecondPanel = Form.create({})(SecondPanel);

export default SecondPanel;