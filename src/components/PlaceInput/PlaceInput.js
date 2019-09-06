import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import ListItem from '../ListItem/ListItem';


const PlaceInput = ({ placeName, placeNameChangeHandler, placeSubmitHandler }) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={{ width: 300 }}
                value={placeName}
                onChangeText={(e) => placeNameChangeHandler(e)}
                placeholder='wtf'
            />
            <Button title="Add" onPress={() => placeSubmitHandler()} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignContent: 'center',
        alignItems: 'center'
    }
})


export default PlaceInput;