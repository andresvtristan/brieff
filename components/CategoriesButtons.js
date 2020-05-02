import React, { useState } from 'react';
import { View, StyleSheet, Button, ScrollView, TouchableOpacity, Text } from 'react-native';


let currentCategory;
let current;

const changeColor = (present) => {
    if (currentCategory === present) {
        return 'black'
    } else {
        return 'white'
    }
};


const CategoriesButtons = (props) => {
    const [currentPressed, setCurrentPressed] = useState(props.currentCategory);
    currentCategory = props.currentCategory;    
    current = props.category.name

    return (
        <View style={styles.buttonBar}>
            <TouchableOpacity style={styles[props.category.name]} onPress={() => {
                props.manageCurrentCategory(props.category.name)
                if (props.category.name === 'Top Stories') {
                    props.getNews()
                } else {
                    props.getCategoryNews(props.category.name)
                }
            }}>
                <View>
                    <Text style={styles.categoryText}>{props.category.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    buttonBar: {
        height: 45,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: `#CD5C5C`,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 6
    },
    categoryText: {
        color: changeColor(current),
        fontSize: 25,
        fontWeight: 'bold'
    },
    headlines: {
        height: '100%',
        justifyContent: 'center',
        width: 126,
        marginLeft: 7
    },
    sports: {
        height: '100%',
        justifyContent: 'center',
        width: 90,
        marginLeft: 9
    },
    entertainment: {
        height: '100%',
        justifyContent: 'center',
        width: 175,
        marginLeft: 7
    },
    technology: {
        height: '100%',
        justifyContent: 'center',
        width: 145,
        marginLeft: 7
    },
    health: {
        height: '100%',
        justifyContent: 'center',
        width: 87,
        marginLeft: 7
    }
});

export default CategoriesButtons;