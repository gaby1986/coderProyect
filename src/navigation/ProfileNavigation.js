import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';


const StackProfile = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
        <StackProfile.Navigator screenOptions={{headerShown: false}} initialRouteName={"Perfil"}>
            <StackProfile.Screen name={"Perfil"}  component={Profile}/>
        </StackProfile.Navigator>
  );
}

export default  ProfileNavigation;