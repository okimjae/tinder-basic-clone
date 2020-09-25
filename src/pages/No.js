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
    TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native'
import loading from '../assets/loading/loading.json'
import crab from '../assets/loading/crab.json'
import next from '../assets/loading/next.json'
import no from '../assets/loading/no.json'
import cryingGirl from '../assets/loading/cryingGirl.json'
import okGirl from '../assets/loading/okGirl.json'
import back from '../assets/loading/back.json'
import heartAnimation from '../assets/loading/heartAnimation.json'

export default function No(props) {
    useEffect(() => {
    }, [])

    const source = [
        no,
        cryingGirl,
        okGirl
    ]

    const random = Math.floor(Math.random() * source.length);
    
    return (
        <>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
                    {/* <Image resizeMode='cover' resizeMethod='auto' style={{ width: 30, height: 30, padding: 10 }} source={require('../assets/loading/heart.png')} /> */}
                    <LottieView source={back} autoPlay loop style={{ width: 150, marginBottom: 70 }} />
                </TouchableOpacity>
                {/* <LottieView source={cryingGirl} autoPlay loop style={{ width: 400  }} /> */}
                {/* <LottieView source={okGirl} autoPlay loop style={{ width: 400  }} /> */}
                <LottieView source={source[random]} autoPlay loop style={{ width: 400 }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({

})