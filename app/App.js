import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import Home from './screens/Home'
import { hot } from 'react-hot-loader/root'
import Layout from './components/Layout'

const store = configureStore({})

const App = () => (
  <Router>
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </Layout>
    </Provider>
  </Router>
)

export default hot(App)
