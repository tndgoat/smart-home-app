import * as React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TextInput } from "@/components/text-input";
// import { Button } from "@/components/button";
import LocalAuth from '../component/LocalAuth';
const Login = ({ navigation }) => {
    return (
        <View className='flex flex-1  bg-[#F0F5F4] justify-between pt-[22%] pb-[5%] items-center'>

            <Image className='w-[300px] ' style={styles.image} source={require('../../assets/AppIcon.png')} />
            <View className='flex items-center space-y-10 pt-[10%]'>
                <Text className='text-[32px] font-bold'>
                    LOGIN
                </Text>
                <View className="  max-w-sm">
                    <View className='flex space-y-[10px]'>
                        <View className="flex justify-center  w-[250px] h-[40px] px-4 rounded-lg bg-white border border-[1px] border-gray-300">
                            <TextInput placeholder="Username..." />
                        </View>
                        <View className="flex justify-center  w-[250px] h-[40px] px-4 rounded-lg bg-white border border-[1px] border-gray-300">
                            <TextInput placeholder="Password" />
                        </View>
                    </View>


                    <View className="flex  justify-between items-right my-[20px]">
                        <Pressable>
                            <Text className="text-right font-light text-[12px]">Forgot your password?</Text>
                        </Pressable>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')} className='flex rounded-md  justify-center w-[250px] h-[35px] bg-[#34A853]'
                        style={styles.shadow}>
                        <Text className='text-white font-semibold text-[15px] text-center'>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className='pt-[40px]'>
                <LocalAuth />
            </View>
            <View className='flex flex-row  '>
                <Text className="text-center font-light text-[12px]">Do not have an account? </Text>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                    <Text className="text-center font-bold text-[12px]"> Sign up now</Text>

                </Pressable>
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
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,

        elevation: 3,
    }

})
export default Login