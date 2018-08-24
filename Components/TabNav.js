import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

class TabNav1 extends React.Component{
    static navigationOptions = {
        title: 'TabNav1'
    }
    render (){
        return(
            <View style={styles.container1}>
                <Text>TabNav1</Text>
                <RkButton onPress = {() => this.props.navigation.navigate('Details')}>Details</RkButton>
            </View>
        );
    }
}

class TabNav2 extends React.Component{
    static navigationOptions = {
        title: 'TabNav2'
    }
    render (){
        return(
            <View style={styles.container1}>
                <Text>TabNav2</Text>
                <RkButton onPress = {() => this.props.navigation.navigate('Home')}>Home</RkButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    }
})

export default createBottomTabNavigator({
    Tab1: TabNav1,
    Tab2: TabNav2,
});