import React from 'react';
import {View, StatusBar } from 'react-native';
import MainNavigation from './src/navigation';
import ListNavigation from './src/navigation/ListNavigation';

export default function App() {

  return (
    <>
        <StatusBar hidden={true} />  
        <MainNavigation />
    </>
   
  );
}

