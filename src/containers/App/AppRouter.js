import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={asyncComponent(() => import('../dashboard'))}
        />
        <Route
          exact
          path={`${url}/blankPage`}
          component={asyncComponent(() => import('../blankPage'))}
        />

        <Route
        exact
        path={`${url}/lexis`}
        component={asyncComponent(() => import('../Lexis/index'))}
      />
      </Switch>
    );
  }
}

export default AppRouter;
