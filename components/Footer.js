import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        console.log('click!')
    }

    render() {
        return (
            <View style={styles.footer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonLeft} onPress={this.handlePress}>
                            <View>
                                <Image style={styles.footerSymbol} source={{uri: 'https://cdn0.iconfinder.com/data/icons/gradak-arrow-flad/32/arrow-49-512.png'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonMiddle}>
                            <View>
                                <Image style={styles.footerMotivatorSymbol} source={{uri: 'https://cdn0.iconfinder.com/data/icons/gradak-communikatok-flad/32/communication-12-128.png'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonRight}>
                            <View>
                                <Image style={styles.footerSymbol} source={{uri: 'https://cdn0.iconfinder.com/data/icons/gradak-arrow-flad/32/arrow-45-512.png'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }

};


const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#404040',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.8
    },
    buttonContainer: {
        flex: 1,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLeft: {
        marginHorizontal: 10,
        width: 100,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonMiddle: {
        marginHorizontal: 10,
        width: 100,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonRight: {
        marginHorizontal: 10,
        width: 100,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    footerSymbol: {
        height: 25,
        width: 25
    },
    footerMotivatorSymbol: {
        height: 30,
        width: 30
    }
});

export default Footer;
