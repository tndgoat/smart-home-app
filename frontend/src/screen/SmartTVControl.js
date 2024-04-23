import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, Image, TextInput, Button, Pressable, TouchableOpacity, ScrollView, } from 'react-native'
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeviceItem from '../component/DeviceItem';
import { SelectList } from 'react-native-dropdown-select-list'
const SmartTVControl = ({ }) => {
    // console.log(route.params)
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = React.useState("");
    const [option, setOption] = useState(null);
    const data = [
        { key: '1', value: 'Living Room', },
        { key: '2', value: 'Study Room' },
        { key: '3', value: 'Bedroom' },
        { key: '4', value: 'Kitchen', },
        { key: '5', value: 'Toilet' },
        { key: '6', value: 'Bedroom 2' },
    ]
    const tvdata = [
        {
            name: 'Smart TV 1',
            location: 'Bedroom',
            channel: 'VTV1',

            status: 1,

        },
        {
            name: 'Smart TV 2',
            location: 'Bedroom',
            channel: 'VTV1',

            status: 1,


        },
        {
            name: 'Smart TV 3',
            location: 'Bedroom',
            channel: 'VTV13',

            status: 0,

        },
        {
            name: 'Smart TV 4',
            location: 'Bedroom',
            channel: 'VTV2',

            status: 1,


        },

    ]
    const mode = [
        { value: 'One color' },
        { value: 'Two colors' },
        { value: 'Three colors' },
    ];
    const handleSubmit = () => {
        setModalVisible(!modalVisible)
    }

    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <View className='flex  flex-1 min-h-screen bg-[#F0F5F4]  items-center'>

                <View className=' py-4 grow  items-center bg-white w-full rounded-t-[30px] mt-[20px]' style={styles.shadow}>
                    <View className="flex flex-row justify-between w-full px-[50px] pb-4">
                        <View className='flex flex-row items-center space-x-1' >
                            <Text className='text-[18px] font-semibold'>Device</Text>
                            <View className='flex items-center justify-center bg-[#4C7380] w-[23px] h-[23px] rounded-md'>
                                <Text className='text-[14px] text-white font-semibold'>{tvdata.length}</Text>
                            </View>
                        </View>
                        <View className='flex flex-row space-x-2'>
                            <Text className='text-[18px] font-semibold'>Add</Text>
                            <TouchableOpacity className='bg-white p-[3px] rounded-[4px]'
                                style={{ elevation: 2 }}
                                onPress={() => setModalVisible(true)}>
                                <Icon name='plus' color={'#4C7380'} size={18} type='material-community' />
                            </TouchableOpacity>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    // Alert.alert('Modal has been closed.');
                                    setModalVisible(!modalVisible);
                                }}>
                                <View className='flex flex-1 justify-end bg-[#000]/[.2]'>
                                    <View className=' items-center space-y-5 pb-2 pt-4 bg-white w-full rounded-t-[30px] ' style={{ elevation: 2 }}>
                                        <View className='w-[90%] pb-1 border-b-[1px]' >
                                            <Text className='text-[18px] font-semibold'>Add TV</Text>

                                        </View>
                                        <View className='space-y-3  justify-center items-center'>
                                            <View className="flex justify-center w-[275px] h-[45px] px-4 rounded-lg bg-white border border-[1px] border-gray-400">
                                                <TextInput placeholder="Enter your TV's name" />
                                            </View>
                                            <View className="flex justify-center w-[275px] items-center px-4 rounded-lg bg-white ">
                                                <SelectList
                                                    setSelected={(val) => setSelected(val)}
                                                    data={data}
                                                    save="value"
                                                    boxStyles={{
                                                        height: 45,
                                                        width: 275,
                                                        borderColor: 'rgba(156, 163, 143, 1)'
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View className='flex  w-[90%] flex-row space-x-3  items-left'>
                                            <Pressable
                                                className='border border-1 px-3 py-1 rounded-md'
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => setModalVisible(!modalVisible)}>
                                                <Text style={styles.textStyle}>Cancel</Text>
                                            </Pressable>
                                            <TouchableOpacity
                                                className='bg-[#107ADB] px-3 py-1 rounded-md'
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => handleSubmit()}>
                                                <Text className='font-medium text-white'>Save</Text>
                                            </TouchableOpacity>


                                        </View>

                                    </View>

                                </View>
                            </Modal>
                        </View>
                    </View>
                    {tvdata.map((tv, index) => (
                        <DeviceItem key={index} type={'tv'} name={tv.name} location={tv.location} channel={tv.channel} status={tv.status} />
                    ))}



                </View>

            </View>
        </ScrollView >




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
export default SmartTVControl