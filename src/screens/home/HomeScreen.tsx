import { Button, Text, View } from 'react-native'
import React, { FC } from 'react'
import commonConstant from '../../utils/constants/common-strings'
import { HomeScreenProps } from '../../utils/constants/interfaces';

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="click" color={"brown"} onPress={() => { navigation.navigate(commonConstant.CHATSTACKSCREEN) }} />
        </View>
    )
};

export default HomeScreen;

