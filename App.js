import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './src/screen/index'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducer from './src/store/reducers'

const Store = createStore(Reducer)

export default function App() {
  return (
    <Provider store={Store}>
      <Screen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
