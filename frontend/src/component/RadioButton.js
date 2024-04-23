import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// import styles from './styles';

export default function RadioButton({ data, onSelect }) {
    const [userOption, setUserOption] = useState(data[0].value);
    const selectHandler = (value) => {
        onSelect(value);
        setUserOption(value);
    };
    return (
        <View className='flex flex-row justify-between items-center'>
            {data.map((item, index) => {
                return (
                    <Pressable

                        className='rounded-lg flex w-[90px] py-[5px]'
                        key={index}
                        style={
                            item.value === userOption ? styles.selected : styles.unselected
                        }
                        onPress={() => selectHandler(item.value)}>
                        <Text style={item.value === userOption ? { color: 'white' } : { color: 'black' }} className='text-[14px] font-medium text-center'> {item.value}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({

    unselected: {
        // backgroundColor: 'red',
        margin: 5,
        borderWidth: 1,
        borderColor: '#121212'

    },
    selected: {
        backgroundColor: '#34A853',
        margin: 5,
    },
});