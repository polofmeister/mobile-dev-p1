import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const greetName = 'Paul Jerald S Landayan';

  return (
    <View>
      <Text style={styles.homeMessage}>Getting started with react native!</Text>
      <Text style={styles.homeGreetMessage}>My name is {greetName}!</Text>
      <Button 
        title='Go to Component Screen'
        onPress={()=>{navigation.navigate('Component')}}
      />
      <Button 
        title='Go To List Demo'
        onPress={()=>{navigation.navigate('List')}}
      />
      <Button 
        title='Go To Image Screen'
        onPress={()=>{navigation.navigate('Image')}}
      />
      <Button 
        title='Go To Counter Screen'
        onPress={()=>{navigation.navigate('Counter')}}
      />
      <Button 
        title='Go To Colors Screen'
        onPress={()=>{navigation.navigate('Colors')}}
      />
      <Button 
        title='Go To Square Screen'
        onPress={()=>{navigation.navigate('Square')}}
      />
      <Button 
        title='Go To Text Screen'
        onPress={()=>{navigation.navigate('Text')}}
      />
      <Button 
        title='Go To Box Screen'
        onPress={()=>{navigation.navigate('Box')}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeMessage: {
    fontSize: 45
  },
  homeGreetMessage: {
    fontSize: 20
  }
});

export default HomeScreen;
