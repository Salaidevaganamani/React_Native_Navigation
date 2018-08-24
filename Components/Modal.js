import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation';

export default class ModalScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container1}>
                <Text style = {styles.Text1}>This is a Modal!</Text>
                <RkButton onPress = {() => this.props.navigation.goBack()}>Dismiss</RkButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bfbfbf',
    },
    Text1: {
        fontSize: 30,
    }
});
