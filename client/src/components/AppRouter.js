import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routes";
import { COURSES_ROUTE, SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const {user} = useContext(Context)

  console.log(user)
  return (
    <Switch>
        {user.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact/>
        )}
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact/>
        )}
        <Redirect to={SHOP_ROUTE}/>
        <Redirect to={COURSES_ROUTE}/>
    </Switch>
  )
}

export default AppRouter;
