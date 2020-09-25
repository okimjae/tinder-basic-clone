import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';
import Swiper from 'react-native-swiper'
import LottieView from 'lottie-react-native'
import verified from '../assets/loading/verified.json'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Profile() {
    useEffect(() => {
    }, [])

    const cards = [
        { source: require('../assets/loading/avatar1.jpg') },
        { source: require('../assets/loading/avatar2.jpg') },
        { source: require('../assets/loading/avatar3.jpg') },
        { source: require('../assets/loading/avatar4.jpg') },
        { source: require('../assets/loading/avatar5.jpg') },
        { source: require('../assets/loading/avatar6.jpg') },
    ]

    return (
        <>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <Swiper style={styles.wrapper}
                        showsButtons
                        // dotColor='grey'
                        // activeDotColor='white'
                        scrollEnabled={false}
                        dotStyle={{ width: 40, height: 4, backgroundColor: 'grey', marginBottom: -30 }}
                        activeDotStyle={{ width: 40, height: 4, backgroundColor: 'white', marginBottom: -30 }}
                        nextButton={
                            <TouchableOpacity style={{ width: 50, height: '100%', marginRight: -10 }} />
                        }
                        prevButton={
                            <TouchableOpacity style={{ width: 50, height: '100%', marginLeft: -10 }} />
                        }
                    >
                        {
                            cards.map((card, i) => (
                                <ImageBackground key={i} source={card.source} style={styles.card}>
                                    <View style={styles.description}>
                                        <View style={styles.title}>
                                            <Text style={styles.name}>Jae</Text>
                                            <Text style={styles.age}>  24</Text>
                                            <LottieView source={verified} autoPlay loop={false} style={{ width: 60, marginBottom: -6, marginLeft: -2 }} />
                                        </View>
                                        <View style={styles.bio} numberOfLines={6}>
                                            <Text style={styles.text}>Otaku, mas não fedido.</Text>
                                            <Text style={styles.text}>Kpop na veia (literalmente), mas não sou kapopero</Text>
                                            <Text style={styles.text}>Amo demais meu filhote</Text>
                                            <Text style={styles.text}>Cansado</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            ))
                        }
                    </Swiper>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 600,
    },
    card: {
        borderRadius: 8,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'flex-end'
    },
    description: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    age: {
        fontSize: 30,
        color: 'white',
        marginBottom: -5
    },
    bio: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column'
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Montserrat Regular',
    }
})