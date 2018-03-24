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
        path={`${url}/outline`}
        component={asyncComponent(() => import('../WeekOutline/index'))}
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
        path={`${url}/keyquestions`}
        component={asyncComponent(() => import('../KeyQuestions/index'))}
        />

        <Route
        exact
        path={`${url}/performance`}
        component={asyncComponent(() => import('../Performance/index'))}
        />

        <Route
        exact
        path={`${url}/extensions`}
        component={asyncComponent(() => import('../Extensions/index'))}
        />

        <Route
        exact
        path={`${url}/continualgoals`}
        component={asyncComponent(() => import('../ContinualGoals/index'))}
        />

        <Route
        exact
        path={`${url}/annotation`}
        component={asyncComponent(() => import('../Annotate/index'))}
        />

        <Route
        exact
        path={`${url}/results`}
        component={asyncComponent(() => import('../Results/index'))}
        />


      </Switch>
    );
  }
}

export default AppRouter;
