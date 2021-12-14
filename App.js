import React from 'react';
import {View, StatusBar } from 'react-native';
import MainNavigation from './src/navigation';
import {Provider}  from 'react-redux';
import store from './src/store'

export default function App() {

  return (   
    <Provider store={store}>
        <StatusBar hidden={true} />  
        <MainNavigation />
    </Provider>      

  );
}

