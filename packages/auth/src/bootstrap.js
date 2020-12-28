import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createMemoryHistory, createBrowserHistory} from 'history';

// Mount function to start up the app
const mount = (el, {onSignIn, onNavigate, defaultHistory, initialPath}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history}/>, el);
  return {
    //when container will navigate, it will call this
    //because it is called by history.listen function we receive arg location
    onParentNavigate({pathname: nextPathname}) {
      const {pathname} = history.location;
      console.log('nextPathname: ',nextPathname);
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
      console.log("Container just navigated");
    }
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory()});
  }
}

// We are running through container
// and we should export the mount function
export {mount};
