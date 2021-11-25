import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import ListNavigation from './ListNavigation';


const MainNavigation = () => {
  return (
    <NavigationContainer>
       <TabNavigation />
    </NavigationContainer>
  );
}

export default  MainNavigation;