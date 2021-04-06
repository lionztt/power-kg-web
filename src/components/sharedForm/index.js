import React, { Component, PropTypes } from 'react'
import { Form } from 'antd'

class SharedForm extends Component {
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            console.log(values);
            this.props.onSubmit(err, values);
        });
    }

    render() {
        const children = this.props.children || [];
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const { getFieldDecorator } = this.props.form;

        return (
            <Form layout="horizontal" onSubmit={this.handleSubmit}>
                {children.map((item, key) =>
                    item.title ? <Form.Item key={key} label={item.title} {...(item.layout ? item.layout : formItemLayout) }>
                        {getFieldDecorator(item.name, { initialValue: item.defaultValue })(item.render)}
                    </Form.Item>
                        : <span key={key}>{getFieldDecorator(item.name, { initialValue: item.defaultValue })(item.render)}</span>
                )}
            </Form>
        )
    }
}
SharedForm.propTypes = {
    children: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
}
export default Form.create()(SharedForm);