import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';


const generateClassName = createGenerateClassName({
productionPrefix: 'ma',
});
export default ({history}) => {
  return (
    <div>

      {/*style provide react component that customizes css in js stuff*/}
      <StylesProvider generateClassName={generateClassName}>
        {/*browser history needs to be only in container*/}
        <Router history={history }>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
