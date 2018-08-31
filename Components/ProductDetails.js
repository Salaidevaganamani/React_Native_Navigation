import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation';

export default class ProductDetailsScreen extends React.Component{
    static navigationOptions = {
        title: 'Product Details',
    };
    
    render(){
        const { navigation } = this.props;
        const item = navigation.getParam('item');
        return(
            <View style = {styles.container1}>
                <Text style = {styles.Text1}>This is a Product Details!</Text>
                <Text>Id: {item.id}</Text>
                <Text>Title: {item.title}</Text>
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
        fontSize: 20,
    }
});