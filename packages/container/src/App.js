//lazy load components in our app
import React, {lazy, Suspense, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/Header'
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles';
import Progress from './components/Progress';
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
//browser history
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <hr/>
          <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path="/auth" >
                <AuthLazy onSignIn={()=>setIsSignedIn(true)}/>
              </Route>
              <Route path="/" component={MarketingLazy}/>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
