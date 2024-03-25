import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import MyStore from './src/redux/MyStore';

const App = () => {
  return (
    <Provider store={MyStore}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
