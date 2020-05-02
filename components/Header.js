import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SearchBar from './SearchBar';
import NewsBar from './NewsBar';

const Header = (props) => {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.mainHeaderContainer}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>brieff</Text>
                    </View>
                    <View style={styles.userButton}>
                        <View style={styles.initialsContainer}>
                            <Text style={styles.initialsText}>AV</Text>
                        </View>
                    </View>
                </View>
                <NewsBar
                    getCovidData={props.getCovidData}
                    covidData={props.covidData}
                    manageCurrentCategory={props.manageCurrentCategory}
                    getCategoryNews={props.getCategoryNews}
                    getNews={props.getNews}
                    currentCategory={props.currentCategory}
                />
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    header: {
        height: 250,
        paddingTop: 44,
        // marginHorizontal: 20,
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: 20,
        backgroundColor: '#383838'
    },
    headerText: {
        color: '#00FA9A',
        fontSize: 50,
        fontFamily: 'Helvetica',
        fontWeight: 'bold'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    headerTextContainer: {
        marginRight: '50%',
        paddingTop: 10
    },
    userButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        height: 30,
        width: 30
    },
    test: {
        // borderWidth: 1,
        // borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 50,
        height: 32,
        marginTop: 10
    },
    initialsContainer: {
        marginRight: 15,
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 25,
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    initialsText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
        // borderColor: 'white'
    },
    categoryBar: {
        // borderLeftWidth: 1,
        // borderColor: 'white'
    }
});

export default Header;
