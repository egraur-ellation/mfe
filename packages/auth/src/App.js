import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';



const generateClassName = createGenerateClassName({
productionPrefix: 'au',
});
export default ({history, onSignIn}) => {
  return (
    <div>

      {/*style provide react component that customizes css in js stuff*/}
      <StylesProvider generateClassName={generateClassName}>
        {/*browser history needs to be only in container*/}
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
