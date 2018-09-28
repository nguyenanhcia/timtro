/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {checkLogin} from "./src/constants/supportChecked";
import initStack from './src/router'
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import SignIn from "./src/view/auth/SignIn";

const {store, persistor} = configureStore();

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }

  componentWillMount() {
    this.state.isLogin = checkLogin()
  }

  render() {
    const {isLogin} = this.state
    if (isLogin) {
      // Đã login
      const App = initStack('Screen_Auth')
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App/>
          </PersistGate>
        </Provider>
      )
    } else {
      //Chưa login
      const App = initStack('Screen_Auth')
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App/>
          </PersistGate>
        </Provider>
      )
    }
  }
}
