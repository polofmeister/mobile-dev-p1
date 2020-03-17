import React, { useReducer } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const VAL = 50;

const reducer = (state, {type, payload}) => {
    console.log(state);
    switch(type){
        case 'ADD':
            return {
                ...state,
                [payload.color]: state[payload.color] + payload.amount
            }
        case 'SUBTRACT':
            return {
                ...state,
                [payload.color]: state[payload.color] - payload.amount
            }
        default:
            return state;
            
    }
};

const SquareScreen = () => {
    
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    return (
        <View>
            <ColorCounter color='Red'
                colorValue={state.red}
                onIncrease={() => {dispatch({type: 'ADD', payload:{color: 'red', amount: VAL}})}}
                onDecrease={() => {dispatch({type: 'SUBTRACT', payload:{color: 'red', amount: VAL}})}}
            />
            <ColorCounter color='Green'
                colorValue={state.green}
                onIncrease={() => {dispatch({type: 'ADD', payload:{color: 'green', amount: VAL}})}}
                onDecrease={() => {dispatch({type: 'SUBTRACT', payload:{color: 'green', amount: VAL}})}}
            />
            <ColorCounter color='Blue'
                colorValue={state.blue}
                onIncrease={() => {dispatch({type: 'ADD', payload:{color: 'blue', amount: VAL}})}}
                onDecrease={() => {dispatch({type: 'SUBTRACT', payload:{color: 'blue', amount: VAL}})}}
            />

            <View style={{...styles.viewBox, backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}}></View>
            <Text>{`rgb(${state.red},${state.green},${state.blue})`}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewBox: {
        height: 100,
        width: 100
    }
});

export default SquareScreen;