import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const CounterScreen = () => {
    const [countState, setCount] = useState(0);
    return (
        <View>
            <Button title='Add'
                onPress={() => {                    
                    setCount((prevState) => (prevState + 1));
                }
            } />
            <Button title='Subtract' onPress={() => {                    
                setCount((prevState) => (prevState - 1));
            }} />
            <Text>haha {countState}</Text>
        </View>
    )
};

const style = StyleSheet.create({

});

export default CounterScreen;