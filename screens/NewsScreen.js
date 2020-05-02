import React, { useState } from 'react';
import { View, StyleSheet, Modal, Image, Text, Button, ScrollView, TouchableOpacity } from 'react-native';


const NewsScreen = (props) => {

    return (
        <Modal visible={props.visible} animationType='fade' transparent={true}>
            <View style={styles.screen}>
                <View style={styles.card}>
                    <ScrollView>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{props.newsData.title}</Text>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>{props.newsData.description}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: `${props.newsData.urlToImage}` }} />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.content}>{props.newsData.content}</Text>
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={styles.touchableButton} onPress={() => { props.modalView() }}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>{props.currentCategory}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};


const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'transparent',
        flex: 1
    },
    card: {
        height: '90%',
        backgroundColor: '#383838',
        marginTop: 50,
        marginHorizontal: 15,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 3,
        shadowRadius: 6,
        paddingTop: 10,
        paddingHorizontal: 5
    },
    titleContainer: {
        margin: 10,
        borderRadius: 10
    },
    imageContainer: {
        alignItems: 'center'
    },
    descriptionContainer: {
        margin: 15,
        backgroundColor: '#00FA9A',
        borderRadius: 15
    },
    image: {
        height: 200,
        width: 320,
        borderRadius: 10,
        marginHorizontal: 20
    },
    title: {
        color: 'white',
        fontSize: 37,
        fontWeight: '900'
    },
    description: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 19
    },
    contentContainer: {
        margin: 15,
        backgroundColor: '#008080',
        borderRadius: 15
    },
    content: {
        color: 'white',
        margin: 12,
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonContainer: {
        marginTop: 20,
        width: 250,
        height: 40,
        backgroundColor: '#CD5C5C',
        borderRadius: 20,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableButton: {
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: '900',
        fontSize: 30
    }
});


export default NewsScreen;



{/* <View >
<View style={styles.titleContainer}>
    <Text>Title</Text>
</View>
<View style={styles.descriptionContainer}>
    <Text>Description</Text>
</View>
<View style={styles.imageContainer}>
    <Text>Image</Text>
    <Image />
</View>
<View style={styles.textContainer}>
    <Text>Text</Text>
</View>
<Button title="x" onPress={() => { props.modalView() }} />
</View> */}