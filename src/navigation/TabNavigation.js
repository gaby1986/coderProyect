import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListNavigation from './ListNavigation';
import ProfileNavigation from './ProfileNavigation';


const BottomTabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
        <BottomTabs.Navigator
            initialRouteName={"List"}
            screenOptions={{headerShown: false, tabBarShowLabel: false}}
            >
            <BottomTabs.Screen
               name={"List"}  
               component={ListNavigation}   
               options={
                   {
                   tabBarIcon:() =>(
                        <View>
                            <Text>Home</Text>
                        </View>
                   )

               }}
            />
            <BottomTabs.Screen
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
               name={"Profile"}  
               component={ProfileNavigation}   
               options={
                   {
                   tabBarIcon:() =>(
                        <View>
                            <Text>Perfil</Text>
                        </View>
                   )

               }}
            />
        </BottomTabs.Navigator>
  );
}

export default  TabNavigation;