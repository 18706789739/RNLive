import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configStore from './src/redux/store';

import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
var storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
})
global.storage = storage

import Route from './Route';

export default class App extends Component {

  render() {
    return (
      <Provider store={configStore()}>

          < Route />

      </Provider>
    );
  }
}

