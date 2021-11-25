import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../screens/Details';
import List from '../screens/List'


const StackList = createNativeStackNavigator();

const ListNavigation = () => {
  return (
        <StackList.Navigator screenOptions={{headerShown: false}} initialRouteName={"Listado"}>
            <StackList.Screen name={"Listado"}  component={List}/>
            <StackList.Screen name={"Detalle"}  component={Details}/>
        </StackList.Navigator>
  );
}

export default  ListNavigation;