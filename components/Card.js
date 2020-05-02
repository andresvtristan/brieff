import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import NewsScreen from '../screens/NewsScreen';

const Card = (props) => {
    const [news, setNews] = useState();
    const [viewModal, setViewModal] = useState(false);

    const modalView = () => {
        setViewModal(false)
    }

    return (

        <View style={{ ...styles.card, ...props.style }}>
            <NewsScreen
                modalView={modalView}
                visible={viewModal}
                newsData={props.news}
                currentCategory={props.currentCategory}
            />
            <TouchableOpacity style={styles.touchable} onPress={() => { setViewModal(true) }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.categoryTitle}>{props.news.title}</Text>
                </View>
                <View>
                    <Image
                        style={styles.newsImage}
                        source={{ uri: `${props.news.urlToImage}` }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    card: {
        width: 350,
        height: '100%',
        borderRadius: 20,
        marginLeft: 20,
        backgroundColor: '#383838',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        alignItems: 'center'
    },
    titleContainer: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15
    },
    categoryTitle: {
        color: 'white',
        fontSize: 27,
        fontWeight: '900'
    },
    descriptionText: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 10
    },
    descriptionContainer: {
        marginBottom: 10
    },
    newsImage: {
        width: 270,
        height: 250,
        marginBottom: 15,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 1
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    nameTextContainer: {
        marginLeft: '50%'
    },
    touchable: {
        alignItems: 'center'
    }
});

export default Card;
