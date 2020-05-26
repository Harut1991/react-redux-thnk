import { Layout, Menu } from 'antd';
import LanguageService from '../services/languageService';
import { connect } from 'react-redux';
import { signOut } from '../actions';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import AppPropTypes from '../utils/appPropTypes';

const { Option } = Select;
const { Header, Content, Footer } = Layout;

function MainLayout(props) {

  const langService = new LanguageService();
  const lang = langService.getLang();

  const changeLanguage = (value) => {
      langService.setLang(value);
      props.i18n.changeLanguage(value)
  }

  const logOutHandle = () => {
    props.dispatch(signOut());
  }

  return (
    <Layout>
        <Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.pathname]}>
              <Menu.Item key="/"><Link to="/">{props.t('home')}</Link></Menu.Item>
              <Menu.Item key="/about"><Link to="/about">{props.t('about')}</Link></Menu.Item>
              {!props.auth.token && <Menu.Item key="/sign-in"><Link to="/sign-in">{props.t('sign_in')}{props.auth.token}</Link></Menu.Item>}
              {!props.auth.token && <Menu.Item key="/sign-up"><Link to="/sign-up">{props.t('sign_up')}</Link></Menu.Item>}
              {props.auth.token && <Menu.Item key="/profile"><Link to="/profile">{props.t('profile')}</Link></Menu.Item>}
              {props.auth.token && <Menu.Item onClick={logOutHandle}>{props.t('logout')}</Menu.Item>}
              <Menu.Item>
                <Select defaultValue={lang.split('-')[1]} style={{ width: 120 }} onChange={changeLanguage}>
                  <Option value="en-EN">EN</Option>
                  <Option value="ru-RU">RU</Option>
                </Select>
              </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout">
          <div className="site-layout-background">
              {props.children}
          </div>
        </Content>
        <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

MainLayout.propTypes = {
  auth: AppPropTypes.auth
};

const mapStateToProps = (state) => {
  return { auth: state.AuthReducer }
}

export default connect(mapStateToProps)(MainLayout);
