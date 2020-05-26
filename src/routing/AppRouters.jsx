import { Switch, BrowserRouter } from "react-router-dom"
import MainLayout from '../layouts/mainLayout';
import React from 'react';
import routerList from "./RouteList";
import AppRoute from "./AppRoute";

const AppRouters = () => (
    <BrowserRouter>
        <Switch>
            {Object.entries(routerList).map(res => {
                return res[1].map(({component: Component, layout: Layout, ...data}) => {
                    return <AppRoute layout={Layout ? Layout : MainLayout} component={Component} {...data} {...{type: res[0]}}/>
                });                    
            })}
        </Switch>
    </BrowserRouter>
)

export default AppRouters;