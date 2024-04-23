import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";

import {
    ImageBackground, StyleSheet, View, Text,
    Image, TextInput, Button, Pressable,
    TouchableOpacity, ScrollView, Switch
} from 'react-native'
const SmartTVSetting = ({ route }) => {
    const schedules = route.params.schedule
    // const color = route.params.color
    const [schedulelist, setSchedulelist] = useState(schedules)

    const [isEnabled, setIsEnabled] = useState(route.params.status);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View className='flex flex-1 justify-between items-center pt-16 pb-8 space-y-10 bg-[#F0F5F4]'>
            <View className='flex flex-row w-[200px] justify-between space-x-6'>
                <View className='flex items-center space-y-3'>
                    <TouchableOpacity style={{ elevation: 3 }} className='flex justify-center items-center p-2 h-[65px] w-[65px] rounded-full bg-[#659A6E] '>
                        <Icon name='chevron-left' className='' size={35} color={'white'} type='material-community' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 3 }} className='flex justify-center items-center p-2 h-[65px] w-[65px] rounded-full bg-[#659A6E] '>
                        <Icon name='play-pause' className='' size={27} color={'white'} type='material-community' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 3 }} className='flex justify-center items-center p-2 h-[65px] w-[65px] rounded-full bg-[#659A6E] '>
                        <Icon name='volume-off' className='' size={29} color={'white'} type='material-community' />
                    </TouchableOpacity>
                </View>
                <View style={{ elevation: 1 }} className='flex items-center space-y-3'>
                    <View className='flex items-center bg-[#659A6E] rounded-full space-y-3'>
                        <TouchableOpacity style={{ elevation: 0.5 }} className='flex justify-center items-center p-2 h-[65px] w-[65px] rounded-full bg-[#659A6E] '>
                            <Icon name='plus' className='' size={35} color={'white'} type='material-community' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ elevation: 1 }} className='flex justify-center items-center p-2 h-[65px] w-[65px] rounded-full bg-[#659A6E] '>
                            <Icon name='minus' className='' size={35} color={'white'} type='material-community' />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ elevation: 1 }} className='flex justify-center items-center p-2 h-[65px] w-[65px] rounded-full bg-[#659A6E] '>
                        <Text className='font-bold text-white medium text-[20px]'>123</Text>
                    </TouchableOpacity>

                </View>
            </View>

            {/*  */}
            <View style={{ elevation: 3 }} className='flex justify-center space-y-2 items-center rounded-full bg-[#659A6E] h-[200px] w-[200px]'>
                <View className='flex justify-center items-center'>
                    <TouchableOpacity className='flex justify-center items-center px-8 pb-1  '>
                        <Icon name='triangle' className='' size={18} color={'#D9D9D9'} type='material-community' />

                    </TouchableOpacity>
                </View>
                <View className='flex flex-row space-x-3'>
                    <View className='flex justify-center items-center'>
                        <TouchableOpacity className='flex justify-center items-center py-8  pr-1 '>
                            <Icon name='triangle' style={{ transform: [{ rotate: '270deg' }] }} className='' size={18} color={'#D9D9D9'} type='material-community' />

                        </TouchableOpacity>
                    </View>
                    <LinearGradient
                        colors={['#060505', '#2E2E2E', '#3F3C3C']} className='flex justify-center items-center rounded-full h-[115px] w-[115px]'>
                    </LinearGradient>
                    <View className='flex justify-center items-center'>
                        <TouchableOpacity className='flex justify-center items-center py-8  pl-1'>
                            <Icon name='triangle' style={{ transform: [{ rotate: '90deg' }] }} className='' size={18} color={'#D9D9D9'} type='material-community' />

                        </TouchableOpacity>
                    </View>
                </View>

                <View className='flex justify-center items-center'>
                    <TouchableOpacity className='flex justify-center items-center pt-1 px-8'>
                        <Icon name='triangle' style={{ transform: [{ rotate: '180deg' }] }} className='' size={18} color={'#D9D9D9'} type='material-community' />

                    </TouchableOpacity>
                </View>
            </View>
            <View className='flex justify-center items-center'>
                <TouchableOpacity className='bg-white rounded-full flex p-1' style={{ elevation: 2 }}>
                    <Icon name='power' className='' size={30} color={'#EA4335'} type='material-community' />
                </TouchableOpacity>
            </View>

        </View>



    );
};
const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain'
    },
    shadow: {
        shadowColor: "#000",
        elevation: 2,
    }

})
export default SmartTVSetting