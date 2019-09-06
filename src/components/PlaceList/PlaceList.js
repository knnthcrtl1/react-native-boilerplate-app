import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';


const PlaceList = ({ places, onItemDeleted }) => {


    return (
        <FlatList
            data={places}
            renderItem={(info) => (
                <ListItem
                    place={info.item.value}
                    placeImage={info.item.image}
                    onItemDeleted={() => onItemDeleted(info.item.key)}
                />
            )}
            keyExtractor={(place, index) => place.key.toString()}
        />
    )
}



export default PlaceList;