import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './Components/Home.js';
import DetailsScreen from './Components/Details.js';
import ModalScreen from './Components/Modal.js';
import createBottomTabNavigator from './Components/TabNav.js';
import AuthLoadingScreen from './Components/AuthLoading.js';
import SignInScreen from './Components/SignIn.js';
import ProductList from './Components/ProductList.js';
import ProductDetailsScreen from './Components/ProductDetails.js';

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Tabs: createBottomTabNavigator,
    Products: ProductList,
    ProductDetails: ProductDetailsScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    MyModal: ModalScreen,
  },
  {
   mode: 'modal',
   headerMode: 'none',
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
)

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)
