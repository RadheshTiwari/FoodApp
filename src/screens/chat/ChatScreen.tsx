import { Button, Text, View } from 'react-native'
import React, { FC } from 'react'

import { ChatScreenProps } from '../../utils/constants/interfaces'

const ChatScreen: FC<ChatScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Text>ChatScreen</Text>
            <Button title='click' color={"brown"} onPress={() => navigation.goBack()} />
        </View>
    )
}

export default ChatScreen

