import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { createStackNavigator } from 'react-navigation';

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return{
        title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      };
    };
    render(){
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const otherParam = navigation.getParam('otherParam', 'some default value');
  
      return (
        <View style={styles.container}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <RkButton onPress = {() => this.props.navigation.navigate('Products')}>Products</RkButton>
          <RkButton onPress = {() => this.props.navigation.popToTop()}>Home</RkButton>
          <RkButton onPress = {() => this.props.navigation.goBack()}>Go Back</RkButton>
          <RkButton onPress = {() => this.props.navigation.setParams({otherParam: 'Updated!'})}>Update Details</RkButton>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default DetailsScreen;