import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    const friends = [
        { title: 'Bulbasaur', path: '../../assets/1.png' },
        { title: 'Charmander', path: '../../assets/4.png' },
        { title: 'Squirtle', path: '../../assets/7.png' }
    ];

    return (
        <View>
            <ImageDetails
            imageTitle={'Bulbasaur'}
            imagePath={require('../../assets/1.png')}
            />
            <ImageDetails
            imageTitle={'Charmander'}
            imagePath={require('../../assets/4.png')}
            />
            <ImageDetails
            imageTitle={'Squirtle'}
            imagePath={require('../../assets/7.png')}
            />
        </View>
    )
};

const style = StyleSheet.create({

});

export default ImageScreen;