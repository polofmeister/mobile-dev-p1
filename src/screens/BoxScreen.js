import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textStyle}></View>
            <View style={styles.textStyle1}></View>
            <View style={styles.textStyle2}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
        
    },
    textStyle: {
        borderColor: 'black',
        borderWidth: 2,
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    textStyle1: {
        borderColor: 'black',
        borderWidth: 2,
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        marginHorizontal: 50,
        top: 100
    },
    textStyle2: {
        borderColor: 'black',
        borderWidth: 2,
        height: 100,
        width: 100,
        backgroundColor: 'green'
    }
});

export default BoxScreen;