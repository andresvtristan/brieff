import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const SearchBar = (props) => {
    return (
        <View style={styles.input}>
            <TextInput />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 10,
        height: 30,
        marginTop: 20,
        width:300,
        backgroundColor: 'lavender',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SearchBar;