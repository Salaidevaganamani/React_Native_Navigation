import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';
import { RkTextInput, RkButton } from 'react-native-ui-kitten';


class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };

    constructor(props){
        super(props);
        this.state = {
            name:'',
        }
    }

    handleName = (text) => {
        this.setState({name: text})
    }
  
    render() {
      return (
        <View style={styles.container}>
          <RkTextInput 
            rkType='rounded' 
            placeholder='Email'
            onChangeText = {this.handleName}
            />
          <RkButton onPress={() => this._signInAsync(this.state.name)}>Sign In!</RkButton>
          
        </View>
      );
    }
  
    _signInAsync = async (name) => {
        if(name == 'salai@abc.com'){
            await AsyncStorage.setItem('userToken', 'abcd');
            this.props.navigation.navigate('App');
        }else{
            alert('Failed');
        }
      
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });

  export default SignInScreen;