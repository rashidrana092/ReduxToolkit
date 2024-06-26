import React from 'react';
import Users from '../screens/Users';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddUser from '../screens/AddUser';
const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Users' component={Users} />
                <Stack.Screen name='AddUser' component={AddUser} />

            </Stack.Navigator>

        </NavigationContainer>
    );
};
export default AppNavigator;
