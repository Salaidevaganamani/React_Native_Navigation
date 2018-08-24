import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};
      return{
        headerTitle: 'Home',
        headerLeft: (
          <RkButton onPress={() => navigation.navigate('MyModal')}>Modal</RkButton>
        ),
        headerRight: (
          <RkButton onPress={params.increaseCount}>Info</RkButton>
        ),
      } 
    };

    componentDidMount() {
      this.props.navigation.setParams({ increaseCount: this._increaseCount})
    }

    state = {
      count: 0,
    }

    _increaseCount = () => {
      this.setState({count: this.state.count + 1});
      // this.props.navigation.navigate('MyModal');
    };

    render(){
      return (
        <View style={styles.container}>
          <Text>Home Screen!</Text>
          <Text>Count: {this.state.count}</Text>
          <RkButton onPress = {() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything u want here',
          })}>Details</RkButton>
          <RkButton onPress = {() => this.props.navigation.navigate('Tabs')}>Tabs</RkButton>
          <RkButton onPress = {this._signOutAsync}>Sign Out!</RkButton>
        </View>
      );
    }

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default HomeScreen;