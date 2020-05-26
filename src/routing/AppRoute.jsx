import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import AppPropTypes from "../utils/appPropTypes";
import PropTypes from 'prop-types';



const AppRoute = ({ component: Component, layout: Layout,auth, ...rest }) => {
    const { t, i18n } = useTranslation();
    
    if (rest.type === 'all' || rest.type === 'error' 
        || (rest.type === 'authenticated' && auth.token)
        || (rest.type === 'unauthenticated' && !auth.token)){
        return <Route {...rest} render={props => (
            <Layout t={t} i18n={i18n}>
                <Component t={t} i18n={i18n} {...props} />
            </Layout>
        )} />
    } else {
        return <Redirect to="/" />
    }
}

AppRoute.propTypes = {
    auth: AppPropTypes.auth,
    component: PropTypes.any,
    layout: PropTypes.any,
    type: PropTypes.string,
    exact: PropTypes.bool
};

const mapStateToProps = (state) => {
    return { auth: state.AuthReducer }
}

export default connect(mapStateToProps)(AppRoute);