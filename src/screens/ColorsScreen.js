import React, { useState } from 'react';
import { Button, View, FlatList, StyleSheet, Text } from 'react-native';

const ColorsScreen = () => {
    const [countState, setCount] = useState([]);
    return (
        <View>
            <Button title='Add a Color'
                onPress={() => {
                    setCount((prevState) => { console.log(prevState); return [...prevState, randomRGB()] });
                }
                } />
            <FlatList
                keyExtractor={(color) => color}
                data={countState}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={{...styles.viewBox, backgroundColor: item}}></View>
                            <Text>{item}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
    viewBox: {
        height: 100,
        width: 100
    }
});

export default ColorsScreen;