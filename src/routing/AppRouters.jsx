import { Switch, BrowserRouter } from "react-router-dom"
import MainLayout from '../layouts/mainLayout';
import React from 'react';
import routerList from "./RouteList";
import AppRoute from "./AppRoute";

const AppRouters = () => (
    <BrowserRouter>
        <Switch>
            {routerList.map(({component: Component, layout: Layout, ...data}, index) => (
                <AppRoute key={index} layout={Layout ? Layout : MainLayout} component={Component} {...data} />
            ))}
        </Switch>
    </BrowserRouter>
)

export default AppRouters;