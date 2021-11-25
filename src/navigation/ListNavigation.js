import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../screens/Details';
import List from '../screens/List'


const Stack = createNativeStackNavigator();

const ListNavigation = () => {
  return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Listado"}>
            <Stack.Screen name={"Listado"}  component={List}/>
            <Stack.Screen name={"Detalle"}  component={Details}/>
        </Stack.Navigator>
  );
}

export default  ListNavigation;