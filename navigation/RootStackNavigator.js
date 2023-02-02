import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ScanQRCodeScreen from '../screens/ScanQRCodeScreen';


const RootStackNav = createStackNavigator();



function RootStack(props) {

    return (
        <RootStackNav.Navigator
        screenOptions={{
            headerShown:false,
        }}
        initialRouteName='HomeScreen'
      >
    


    <RootStackNav.Screen
     name="HomeScreen"
     component={HomeScreen}

     /> 

    <RootStackNav.Screen
     name="ProductScreen"
     component={ProductScreen}

     /> 

    <RootStackNav.Screen
     name="CartScreen"
     component={CartScreen}

     /> 

    <RootStackNav.Screen
     name="ScanQRCodeScreen"
     component={ScanQRCodeScreen}

     /> 
    

</RootStackNav.Navigator>

    )
};


export default RootStack;