import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '../screens/Details';
import List from '../screens/List'
import ListNavigation from './ListNavigation';


const BottomTabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
        <BottomTabs.Navigator screenOptions={{headerShown: false}} initialRouteName={"Listado"}>
            <BottomTabs.Screen name={"Home"}  component={ListNavigation}/>
        </BottomTabs.Navigator>
  );
}

export default  TabNavigation;