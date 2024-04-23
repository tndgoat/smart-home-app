import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { Icon } from 'react-native-elements';

import {
    ImageBackground, StyleSheet, View, Text,
    Image, TextInput, Button, Pressable,
    TouchableOpacity, ScrollView, Switch
} from 'react-native'
const SmartLightSetting = ({ route }) => {
    const schedules = route.params.schedule
    // const color = route.params.color
    const [schedulelist, setSchedulelist] = useState(schedules)

    const [selectedValue, setSelectedValue] = useState(route.params.color.currcolor - 1);
    const [isEnabled, setIsEnabled] = useState(route.params.status == 1);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const colorList = ["#FFAA1D", "#007BFF", "#F9280C"]
    return (
        <ScrollView showsVerticalScrollIndicator={false} >

            <View className="flex flex-1 min-h-screen h-full justify-between items-center ">
                <View className="flex w-full bg-[#F0F5F4]  flex-1 justify-between  ">
                    <ImageBackground source={require('../../assets/LB1.png')} className='flex h-[500px]  w-full  justify-between' resizeMode="cover">
                        <View className='flex flex-1 w-[175px]  items-center space-y-3 mt-[40px] mb-[150px]'>
                            <Text className='text-[18px] text-center font-bold text-[#659A6E] mb-2'>{route.params.name}</Text>
                            <View className='flex justify-center items-center    '>
                                <Text className='text-[16px]'>Power</Text>
                                <Switch
                                    className="scale-[1.5] "
                                    trackColor={{ false: '#D9D9D9', true: '#659A6E' }}
                                    thumbColor={isEnabled ? '#fff' : '#f4f3f4'}

                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <View className='flex justify-center self-center space-y-2 items-center '>
                                <Text className='text-[16px]'>Color</Text>
                                <View className='flex flex-row h-[70px] py-1 rounded-xl border border-2 border-[#34A853]/[.55]'>
                                    {[...Array(route.params.color.num).keys()].map((item, index) => (
                                        <View key={index}>
                                            <RadioButton

                                                value={index}
                                                status={selectedValue == index ?
                                                    'checked' : 'unchecked'}
                                                onPress={() => setSelectedValue(index)}
                                                color={colorList[index]}
                                            />
                                            <Text className='text-center font-medium text-[30x] '>{index + 1}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </ImageBackground >
                    <View className='flex flex-1 rounded-tl-[30px] bg-[#3cf0f0]/[.13] '>
                        <View className=' flex flex-1 justify-between  items-center bg-white w-full rounded-t-[30px]' style={{ elevation: 2 }}>


                            <View className='w-[90%] pt-4 pb-1 flex flex-row justify-between border-b-[1px]' >
                                <Text className='text-[18px] font-semibold'>Schedule</Text>
                                <TouchableOpacity onPress={() => setSchedulelist(schedules.push({ "day": ["Thu", "Fri"], "time": ["11", "00", "22", "30"] }))}>
                                    <View className='flex flex-row space-x-1 justify-center items-center'>
                                        <Icon name='plus-circle' size={20} color={'#34A853'} type='material-community' />
                                        <Text className='text-[16px] font-medium'>Add</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View className='flex flex-1 overflow-visible'>
                                {schedules.map((schedule, index) => (
                                    <View key={index} className='flex flex-row justify-center self-center items-center w-full mt-5 w-[90%] space-x-3 pb-1 '>
                                        <View className='flex flex-row space-x-1  pb-1 border-b-[1px]'>
                                            <Text className='text-[14px]'>
                                                {schedule.day[0]} - {schedule.day[1]}
                                            </Text>
                                            <TouchableOpacity>
                                                <Icon name='chevron-down' size={20} color={'#34A853'} type='material-community' />

                                            </TouchableOpacity>
                                        </View>
                                        <Text className='font-light'>From</Text>
                                        <View className='flex flex-row w-[55px] space-x-1 justify-center items-center pb-[1px] border-b-[1px]'>
                                            <TextInput className='text-right  text-[14px] '>
                                                {schedule.time[0]}
                                            </TextInput>
                                            <Text>:</Text>
                                            <TextInput className='text-left text-[14px] '>
                                                {schedule.time[1]}

                                            </TextInput>
                                        </View>
                                        <Text className='font-light'>To</Text>
                                        <View className='flex flex-row w-[55px] space-x-1 justify-center items-center pb-[1px] border-b-[1px]'>
                                            <TextInput className='text-right  text-[14px] '>
                                                {schedule.time[2]}
                                            </TextInput>
                                            <Text>:</Text>
                                            <TextInput className='text-left text-[14px] '>
                                                {schedule.time[3]}
                                            </TextInput>
                                        </View>
                                        <TouchableOpacity>
                                            <Icon name='close-circle-outline' size={20} color={'#EA4335'} type='material-community' />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        </View>

                    </View>
                    {/* Schedule  */}
                </View>
            </View >
        </ScrollView>




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
export default SmartLightSetting