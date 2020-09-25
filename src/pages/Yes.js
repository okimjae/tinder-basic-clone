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
import happyGirl from '../assets/loading/happyGirl.json'
import okGirl from '../assets/loading/okGirl.json'
import back from '../assets/loading/back.json'
import heartAnimation from '../assets/loading/heartAnimation.json'
import fire from '../assets/loading/fire.json'

export default function Yes(props) {
    useEffect(() => {
    }, [])

    const source = [
        // crab,
        happyGirl,
    ]

    const random = Math.floor(Math.random() * source.length);

    return (
        <>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <LottieView source={fire} autoPlay loop autoSize style={{ width: 400 }} />
                <Text style={styles.text}>no ZAP</Text>
                <LottieView source={source[random]} autoPlay loop style={{ width: 400 }} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        marginTop: -100
    }
})