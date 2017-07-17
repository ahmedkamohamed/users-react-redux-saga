import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import RootContainer from './containers/RootContainer'
import store from './Store'
import registerServiceWorker from './registerServiceWorker'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={RootContainer}>
      </Route>

    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
