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
          component={asyncComponent(() => import('../Dashboard/dashboard'))}
        />
        <Route
          exact
          path={`${url}/primaryreadings`}
          component={asyncComponent(() => import('../PrimaryReadings/index'))}
        />

        <Route
        exact
        path={`${url}/lexis`}
        component={asyncComponent(() => import('../Lexis/index'))}
        />

        <Route
        exact
        path={`${url}/furtherreadings`}
        component={asyncComponent(() => import('../FurtherReadings/index'))}
        />

        <Route
        exact
        path={`${url}/performance`}
        component={asyncComponent(() => import('../Performance/index'))}
        />
      </Switch>
    );
  }
}

export default AppRouter;
