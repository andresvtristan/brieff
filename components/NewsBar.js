import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView, Button,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';

import CategoriesButtons from './CategoriesButtons';
import CovidScreen from '../screens/CovidScreen';

const NewsBar = (props) => {
    const [covidVisual, setCovidVisual] = useState(false);

    // console.log(covidData)


    const categories = [
        { name: 'headlines' },
        { name: 'sports' },
        { name: 'entertainment' },
        { name: 'technology' },
        { name: 'health' }
    ]

    return (
        <View style={styles.headerButtonsContainer}>
            <CovidScreen
                covidData={props.covidData}
                visible={covidVisual}
                setCovidVisual={setCovidVisual}
            />
            <View style={styles.categoryContainer}>
                <View style={styles.categoryTitle}>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: '800' }}>categories</Text>
                </View>
                <TouchableOpacity style={styles.covidButtonContainer} onPress={() => {
                    props.getCovidData()
                    setCovidVisual(true)
                }}>
                    <View style={styles.covidButton}>
                        <Text style={styles.covidLetters}>covid-19 alert</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                {categories.map((category, key) => (
                    <CategoriesButtons
                        currentCategory={props.currentCategory}
                        manageCurrentCategory={props.manageCurrentCategory}
                        category={category} key={key}
                        getCategoryNews={props.getCategoryNews}
                        getNews={props.getNews}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    newsBar: {
        width: 100,
        height: 110,
        borderRadius: 20,
        backgroundColor: '#008080',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.4,
        marginBottom: 15,
        marginRight: 15,
        marginTop: 15,
        marginLeft: 10
    },
    headerButtonsContainer: {
        flexDirection: 'column',
        height: '75%',
        width: '100%',
        justifyContent: 'space-between',
        // borderColor: 'white',
        // borderWidth: 1
    },
    categoriesButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'white'
    },
    categoryTitle: {
        marginTop: 30,
        backgroundColor: '#008080',
        width: '55%',
        marginRight: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 10,
        height: 30,
        marginBottom: 6,
        // borderWidth: 1,
        // borderColor: 'white'
    },
    categoriesText: {
        color: 'white',
        fontWeight: 'bold'
    },
    categoryTitleText: {
        color: 'white'
    },
    covidButton: {
        backgroundColor: '#20B2AA',
        // borderWidth: 1,
        // borderColor: 'white',
        marginTop: 30,
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryContainer: {
        // borderWidth: 1,
        // borderColor: 'white',
        flexDirection: 'row'
    },
    covidLetters: {
        color: 'white',
        fontWeight: '900',
        fontSize: 20
    },
    covidButtonContainer: {
        width: 170
    }
});


export default NewsBar;
