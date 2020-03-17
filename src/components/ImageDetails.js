import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetails = ({imageTitle, imagePath}) => {
    return (
        <View>
            <Image source={imagePath}/>
            <Text>{imageTitle}</Text>
        </View>
    )
};

const style = StyleSheet.create({

});

export default ImageDetails;