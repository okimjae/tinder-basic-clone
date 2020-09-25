import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    StatusBar,
    Button,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import LottieView from 'lottie-react-native';
import { getDeviceName, getModel } from 'react-native-device-info';

import loading from '../assets/loading/loading.json';
import crab from '../assets/loading/crab.json';
import next from '../assets/loading/next.json';
import heartAnimation from '../assets/loading/heartAnimation.json'
import question from '../assets/loading/question.json'
import Profile from '../components/Profile'
import { sendInteraction } from '../functions'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Main(props) {

    const [deviceName, setDeviceName] = useState({})
    const [deviceModel, setDeviceModel] = useState({})

    const Id = (deviceName + ' ' + deviceModel)

    useEffect(() => {
        getDeviceName().then(name => setDeviceName(name))
        setDeviceModel(getModel())
    }, [])

    let teste = {}

    const Like = () => {
        sendInteraction(Id, 'like')
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        })
        props.navigation.navigate('Yes')
    }

    const Dislike = () => {
        sendInteraction(Id, 'dislike')
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        })
        props.navigation.navigate('No')
    }

    const Maybe = () => {
        sendInteraction(Id, 'maybe')
        props.navigation.navigate('Doubt', Id)
    }

    return (
        <>
            <CardStack
                style={styles.content}
                renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}></Text>}
                ref={swiper => {
                    teste = swiper
                }}
                onSwipedLeft={Dislike}
                onSwipedRight={Like}
                verticalThreshold={Infinity}
            >
                <Card style={[styles.card]}>
                    <Profile />
                </Card>
            </CardStack>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => teste.swipeLeft()}>
                    <Image resizeMode='cover' resizeMethod='auto' style={{ width: 30, height: 30, padding: 10 }} source={require('../assets/loading/close.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Maybe}>
                    <LottieView source={question} autoPlay loop={false} style={{ width: 90 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => teste.swipeRight()}>
                    <LottieView source={heartAnimation} autoPlay loop style={{ width: 90 }} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: windowWidth,
        height: 600,
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center'
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2
    }
})
