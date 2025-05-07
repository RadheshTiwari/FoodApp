/**
 * Here we are creating Main Tab Navigation. Each tab have seprate stack components.
 * and each stack have seprate interfaces.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RouteStackParamList } from '../utils/constants/interfaces';
import commonConstant from '../utils/constants/common-strings';
import { AddStackScreen, ChatStackScreen, HomeStackScreen, LikeStackScreen, ProfileStackScreen } from './stack-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimatedSymbolScreen from '../screens/Animated';


const Tab = createBottomTabNavigator<RouteStackParamList>();
const RootStack = createNativeStackNavigator();



const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Splash" component={AnimatedSymbolScreen} />
                <RootStack.Screen name="Main" component={MainNavigation} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
const MainNavigation = () => {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={commonConstant.HOMESTACKSCREEN} component={HomeStackScreen} />
            <Tab.Screen name={commonConstant.PROFILESTACKSCREEN} component={ProfileStackScreen} />
            <Tab.Screen name={commonConstant.ADDSTACKSCREEN} component={AddStackScreen} />
            <Tab.Screen name={commonConstant.CHATSTACKSCREEN} component={ChatStackScreen} />
            <Tab.Screen name={commonConstant.LIKESTACKSCREEN} component={LikeStackScreen} />
        </Tab.Navigator>

    );
}

export default RootNavigation;