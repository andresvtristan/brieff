import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';


const CovidScreen = (props) => {
    // console.log(props)
    return (
        <Modal
            visible={props.visible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.screen}>
                <View style={styles.card}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>CoronaVirus Updates</Text>
                        <Text style={{ color: 'white', fontSize: 50, fontWeight: 'bold' }}>World</Text>
                    </View>
                    <View style={styles.mainInfoContainer}>
                        <View style={styles.mainInfoTitlesContainer}>
                            <Text style={styles.mainInfoTitles}>Cases </Text>
                            <Text style={styles.mainInfoTitles}>Active </Text>
                            <Text style={styles.mainInfoTitles}>Recovered</Text>
                            <Text style={styles.mainInfoTitles}>Deaths</Text>
                        </View>
                        <View style={styles.mainInfoTextContainer}>
                            <Text style={styles.mainInfoText}>{props.covidData.cases}</Text>
                            <Text style={styles.mainInfoText}>{props.covidData.active}</Text>
                            <Text style={styles.mainInfoText}>{props.covidData.recovered}</Text>
                            <Text style={styles.mainInfoText}>{props.covidData.deaths}</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Today</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.mainInfoTitlesContainer}>
                            <Text style={styles.mainInfoTitles}>Cases</Text>
                            <Text style={styles.mainInfoTitles}>Deaths</Text>
                        </View>
                        <View style={styles.mainInfoTextContainer}>
                            <Text style={styles.mainInfoText}>{props.covidData.todayCases}</Text>
                            <Text style={styles.mainInfoText}>{props.covidData.todayDeaths}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => { props.setCovidVisual(false) }}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>home</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 30
    },
    card: {
        backgroundColor: '#383838',
        flex: 1,
        marginBottom: 315,
        marginTop: 90,
        marginHorizontal: 20,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 6
    },
    titleContainer: {
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoContainer: {
        borderRadius: 10,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#20B2AA',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 6
    },
    buttonContainer: {
        marginHorizontal: 50,
        backgroundColor: '#00FA9A',
        borderRadius: 10,
        height: 30,
        justifyContent: 'center'
    },
    mainInfoContainer: {
        borderRadius: 10,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#CD5C5C',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 6
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    mainInfoText: {
        color: 'white',
        fontSize: 15
    },
    mainInfoTitles: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    mainInfoTitlesContainer: {
        marginRight: 15,
        marginVertical: 15
    },
    mainInfoTextContainer: {
        marginVertical: 15
    }

});


export default CovidScreen;