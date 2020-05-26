import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { signUp } from '../../actions';
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

function SignUp(props) {
    const onFinish = async values => {
        delete values.confirm_password;
        props.dispatch(signUp(values, props.t));
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

            <Form.Item
                label="Confirm Password"
                name="confirm_password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: props.t('input_confirm_password'),
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(props.t('deferent_pass'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                {!props.auth.inProcess && 
                    <Button type="primary" htmlType="submit">
                        {props.t('sign_up')}
                    </Button>}
                {props.auth.inProcess &&
                    <Button type="primary" loading>
                        Loading
                    </Button>}
                
            </Form.Item>
        </Form>
    )
}

SignUp.propTypes = {
    auth: AppPropTypes.auth
};

const mapStateToProps = (state) => {
    return { auth: state.AuthReducer }
}

export default connect(mapStateToProps)(SignUp);
