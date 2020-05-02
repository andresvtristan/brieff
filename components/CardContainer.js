import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import Card from './Card'; 

const CardContainer = (props) => {

    return (
    <View style={styles.cardContainer}>
        <Card news={props.news} currentCategory={props.currentCategory}/>
    </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 20,
        marginBottom: 15,
        padding: 10
    }
});

export default CardContainer;


