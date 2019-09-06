/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import personalImage from './src/assets/personalImage.png';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    justifyContent: "flex-start",
  },
  inputContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    alignContent: 'center',
    alignItems: 'center'
  }
})



class App extends Component {

  state = {
    placeName: '',
    places: []
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: prevState.placeName,
          image: personalImage
        }),
      }
    })

  }

  onItemDeleted = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key
        })
      }
    })
  }

  render() {

    const { places, placeName } = this.state;

    return (
      <View style={styles.container}>
        <PlaceInput
          placeName={placeName}
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <PlaceList
          places={places}
          onItemDeleted={this.onItemDeleted}
        />
      </View>
    )
  }
}



export default App;
