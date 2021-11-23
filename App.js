import React from 'react';
import {View, StatusBar } from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {

  return (
    <>
        <StatusBar hidden={true} />  
        <MainNavigation />
    </>
   
  );
}

