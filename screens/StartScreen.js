import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, FlatList } from 'react-native';
import axios from 'axios';

import TopStories from '../data.js';
import SportsData from '../sports'

import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Motivator from '../components/Motivator';

const StartScreen = (props) => {
    const [personalNews, setPersonalNews] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('headlines');
    const [covidData, setCovidData] = useState({});

    const manageCurrentCategory = (category) => {
        setCurrentCategory(category)
        console.log(currentCategory)
    };

    const managePersonalNews = () => {
        setPersonalNews(SportsData)
    }

    const getCategoryNews = (category) => {
        axios({
            method: 'get',
            url: `http://127.0.0.1:3001/api/getCategoryNews`,
            params: {
                category: category
            }
        })
            .then(response => {
                // setPersonalNews(response.data)
                setPersonalNews(response.data)
                console.log(`success ${category}`)
            })
            .catch(e => console.log(e))
    }

    const getNews = () => {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:3001/api/getNews'
        })
            .then(response => {
                setPersonalNews(response.data)
            })
            .catch(e => console.log('error'))
    }

    const getCovidData = () => {
        axios({
            method: 'get',
            url: 'https://corona.lmao.ninja/v2/all'
        })
            .then(response => {
                setCovidData(response.data)
            })
            .catch(e => console.log('err'))
    }

    useEffect(() => {
        getNews()
    }, [])


    return (
        <View style={styles.screen}>
            <StatusBar barStyle="light-content" />
            <Header
                getCovidData={getCovidData}
                covidData={covidData}
                manageCurrentCategory={manageCurrentCategory}
                getCategoryNews={getCategoryNews}
                getNews={getNews}
                currentCategory={currentCategory}
            />
            <ScrollView
                style={styles.scrollCards}
                horizontal={true}
            >
                {personalNews.map((news, key) => (
                    <CardContainer
                        currentCategory={currentCategory}
                        news={news} key={key}
                    />
                ))}
            </ScrollView>
            <Footer />
        </View>
    )
};




const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#101010'
    },
    scrollCards: {
        flexDirection: 'row'
    }
});


export default StartScreen;







