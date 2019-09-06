import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';

const ListItem = ({ place, placeImage, onItemDeleted }) => {

    return (
        <TouchableHighlight onPress={onItemDeleted}>
            <View style={styles.listItem}>
                <Image source={placeImage} style={styles.placeImage} />
                <Text>{place}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#cccccc',
        color: '#333333',
        padding: 10,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        width: 32,
        height: 32,
        marginRight: 10
    }
})


export default ListItem;