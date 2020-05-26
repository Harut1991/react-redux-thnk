import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import AppPropTypes from '../../utils/appPropTypes';

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 5,
        span: 16,
    },
};

function SignIn(props) {
    const onFinish = values => {
        props.dispatch(signIn(values, props.t));
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Email"
                name="email"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: props.t('input_username'),
                    },
                    {
                        message: props.t('invalid_email'),
                        type: 'email'
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: props.t('input_password'),
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                {!props.auth.inProcess &&
                    <Button type="primary" htmlType="submit">
                        {props.t('sign_in')}
                    </Button>}
                {props.auth.inProcess &&
                    <Button type="primary" loading>
                        Loading
                    </Button>}
            </Form.Item>
        </Form>
    )
}

SignIn.propTypes = {
    auth: AppPropTypes.auth
};

const mapStateToProps = (state) => {
    return { auth: state.AuthReducer }
}

export default connect(mapStateToProps)(SignIn);