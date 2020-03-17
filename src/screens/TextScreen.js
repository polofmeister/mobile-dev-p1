import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [inputText, setText] = useState('');

    const onTextChange = (text) => {
        setText(text);
    }

    return (
        <View>
            <TextInput onChangeText={onTextChange} value={inputText} autoCapitalize='none' autoCorrect={false} style={styles.input}/>
            {inputText.length < 5 && <Text>Password must be greater then 5 chars</Text>} 
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;