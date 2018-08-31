import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { title } from 'change-case';

export default class ProductList extends React.Component {
    static navigationOptions = {
      title: "Product List",
    };

  constructor(props){
    super(props);
    this.state = {products: [], isLoading: true};
  }

  async componentDidMount() {
    var response = await fetch(`http://10.100.100.65:4000/products`);
    var products = await response.json();
    // console.log(products);
    this.setState({products, isLoading: false});
  }

  _keyExtractor(p, i){
        return `${p.id}`;
    }

  _renderItem = ({item}) => (
    <TouchableOpacity onPress = {() => this.props.navigation.navigate('ProductDetails', {item})}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const {products, isLoading} = this.state;
    return (
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size="large" color="green" style={{alignItems: "center"}}/>}
        <FlatList 
        data={products}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        />

        {/* <ScrollView>
          {isLoading && <ActivityIndicator size="large" color="green" style={{alignItems: "center"}}/>}
          {products.map(p => (
            <Text key = {p.id}>{p.title}</Text>
          ))}
        </ScrollView> */}
      </View>
    );
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
