/*  All Interfaces of this project is place here , developer should place Interface of any thing here*/

import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, View } from 'react-native';

// Font Type Interfaces

export interface FontTypes {
    interMedium: string;
    interSemiBold: string;
    lobsterRegular: string;
    poppinsMedium: string;
    poppinsBold: string;
    robotoBold: string;
    robotoMedium: string;
    robotoRegular: string
}

// ParentComponent Type

export type ParentComponent = typeof View | typeof SafeAreaView

// Main Tab Navigation Route type defined

export type RouteStackParamList = {
    HomeStackScreen: NavigatorScreenParams<HomeStackParamList>;
    ProfileStackScreen: NavigatorScreenParams<ProfileStackParamList>;
    AddStackScreen: NavigatorScreenParams<AddStackParamList>;
    ChatStackScreen: NavigatorScreenParams<ChatStackParamList>;
    LikeStackScreen: NavigatorScreenParams<LikeStackParamList>;
}

// HomeStack type defined
export type HomeStackParamList = {
    HomeScreen: undefined;
    HomeDetailsScreen: undefined;
    ChatStackScreen?:undefined;
}

//ProfileStack type defined
export type ProfileStackParamList = {
    ProfileScreen: undefined;
    ProfileDetailsScreen: undefined;
}

//AddStack type defined
export type AddStackParamList = {
    AddScreen: undefined;
    AddDetailsScreen: undefined;
}

//ChatStack type defined
export type ChatStackParamList = {
    ChatScreen: undefined;
    ChatDetailsScreen: undefined;
}

//LikeStack type defined
export type LikeStackParamList = {
    LikeScreen: undefined;
    LikeDetailsScreen: undefined;
}

type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'HomeScreen'>;
type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;
type ChatScreenRouteProp = RouteProp<ChatStackParamList, 'ChatScreen'>;
type ChatScreenNavigationProp = NativeStackNavigationProp<ChatStackParamList, 'ChatScreen'>;

export type HomeScreenProps = {
    route: HomeScreenRouteProp;
    navigation: HomeScreenNavigationProp;
};
export type ChatScreenProps = {
    route: ChatScreenRouteProp;
    navigation: ChatScreenNavigationProp;
};



