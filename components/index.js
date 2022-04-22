import { NavigationContainer } from '@react-navigation/native';
import Home from './home'
import Action from './action'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
                <Stack.Screen name="action" options={{ headerShown: false }} component={Action} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}