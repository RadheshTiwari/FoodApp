/**
 * here, we are create stack navigation for each tab screen.
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import commonConstant from '../utils/constants/common-strings';
import { AddDetailsScreen, AddScreen, ChatDetailsScreen, ChatScreen, HomeDetailsScreen, HomeScreen, LikeDetailsScreen, LikeScreen, ProfileDetailsScreen, ProfileScreen } from '../screens';
import React from 'react';
import { AddStackParamList, ChatStackParamList, HomeStackParamList, LikeStackParamList, ProfileStackParamList } from '../utils/constants/interfaces';


const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
const LikeStack = createNativeStackNavigator<LikeStackParamList>();
const ChatStack = createNativeStackNavigator<ChatStackParamList>();
const AddStack = createNativeStackNavigator<AddStackParamList>();

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name={commonConstant.HOME} component={HomeScreen} />
            <HomeStack.Screen name={commonConstant.HOMEDETAILSSCREEN} component={HomeDetailsScreen} />
        </HomeStack.Navigator>
    );
};

export const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name={commonConstant.PROFILE} component={ProfileScreen} />
            <ProfileStack.Screen name={commonConstant.PROFILEDETAILSSCREEN} component={ProfileDetailsScreen} />
        </ProfileStack.Navigator>
    );
};

export const AddStackScreen = () => {
    return (
        <AddStack.Navigator>
            <AddStack.Screen name={commonConstant.ADD} component={AddScreen} />
            <AddStack.Screen name={commonConstant.ADDDETAILSSCREEN} component={AddDetailsScreen} />
        </AddStack.Navigator>
    );
};

export const ChatStackScreen = () => {
    return (
        <ChatStack.Navigator>
            <ChatStack.Screen name={commonConstant.CHAT} component={ChatScreen} />
            <ChatStack.Screen name={commonConstant.CHATDETAILSSCREEN} component={ChatDetailsScreen} />
        </ChatStack.Navigator>
    );
};
export const LikeStackScreen = () => {
    return (
        <LikeStack.Navigator>
            <LikeStack.Screen name={commonConstant.LIKE} component={LikeScreen} />
            <LikeStack.Screen name={commonConstant.LIKEDETAILSSCREEN} component={LikeDetailsScreen} />
        </LikeStack.Navigator>
    );
};


