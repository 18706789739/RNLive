import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configStore from './src/redux/store';

import Route from './Route';

export default class App extends Component {

  render() {
    return (
      <Provider store={configStore}>
        < Route />
      </Provider>
    );
  }
}

