import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
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

export default function Intro() {
    useEffect(() => {
    }, [])

    const [onPress, setOnPress] = useState(false)

    return (
        <>
            <View style={{ flex: 1 }}>
                {/* <Button title="Fade In" onPress={fadeInFirst} />
                <Button title="Fade Out" onPress={fadeOutFirs} /> */}
                {/* <LottieView  resizeMode='contain' source={loading} autoPlay loop /> */}
                <LottieView autoSize resizeMode='contain' source={crab} autoPlay />
                {/* <TouchableOpacity onPress={() => setOnPress(true)}> */}
                    {/* {!onPress ?
                        <LottieView resizeMode='contain' source={next} />
                        : <LottieView resizeMode='contain' source={next} autoplay />
                    } */}
                     {/* <LottieView resizeMode='contain' source={next} />
                     <LottieView resizeMode='contain' source={next} autoPlay /> */}
                {/* </TouchableOpacity> */}
                {/* <Button onPress={() => setOnPress(true)} title='apertar' /> */}
            </View>
        </>
    )
}
