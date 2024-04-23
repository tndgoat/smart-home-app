import * as React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from 'react-native-elements';
// import LocalAuth from './LocalAuth';
const SignUp = ({ navigation }) => {
    return (
        <View className='flex-1   items-center'>
            <LinearGradient
                className='flex-1 items-center justify-between pt-[22%] pb-[60%] space-y-[30px] w-screen'
                colors={['rgba(83, 165, 195, 0.60)', 'rgba(240, 245, 244, .5)', 'rgba(52, 168, 83, 0.5)']}
                start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }}
            >
                <Image className='w-[300px] ' style={styles.image} source={require('../../assets/AppIcon.png')} />
                <View className='flex items-center '>
                    <Text className='text-[32px] font-md'>
                        Create An Account
                    </Text>
                    <View className="  max-w-sm">

                        <View className='flex justify-center py-[50px] items-center space-y-[10px]'>
                            <View className="flex justify-center  w-[250px] h-[40px] px-4 rounded-lg bg-white border border-[1px] border-gray-300">
                                <TextInput placeholder="Full name" />
                            </View>
                            <View className="flex justify-center  w-[250px] h-[40px] px-4 rounded-lg bg-white border border-[1px] border-gray-300">
                                <TextInput placeholder="Email e.g. name.123@mail.com" />
                            </View>
                            <View className="flex justify-center  w-[250px] h-[40px] px-4 rounded-lg bg-white border border-[1px] border-gray-300">
                                <TextInput placeholder="Enter your password" />
                            </View>

                            <Text className="px-[50px] text-left font-extralight text-[10px]">Password should be a minimum of 8 characters and should contain letters and numbers</Text>

                        </View>




                        <TouchableOpacity className='flex rounded-md  self-center justify-center w-[250px] h-[35px] bg-[#34A853]'
                            style={styles.shadow}>
                            <Text className='text-white font-semibold text-[15px] text-center'>Create account</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </LinearGradient>

        </View >


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
export default SignUp