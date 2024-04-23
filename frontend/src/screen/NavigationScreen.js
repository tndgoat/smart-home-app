import * as React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import VoiceControl from './VoiceControl';

export default function NavigationScreen() {
    const navigation = useNavigation();

    const handleNavigate = (direction) => {
        navigation.navigate(direction)
    }
    return (

        <View className='flex justify-center items-center space-y-2'>
            <View >
                <Button title='Smart Light' onPress={() => handleNavigate('SmartLight')}>
                </Button>

            </View>
            <View>
                <Button title='Smart TV' onPress={() => handleNavigate('SmartTV')}>

                </Button>
            </View>
            <View>
                <Button title='Voice Control' onPress={() => handleNavigate('VoiceControl')}>

                </Button>
            </View>

        </View>

    )
} 