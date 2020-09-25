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
    TextInput
} from 'react-native';
import LottieView from 'lottie-react-native'
import loading from '../assets/loading/loading.json'
import crab from '../assets/loading/crab.json'
import next from '../assets/loading/next.json'
import no from '../assets/loading/no.json'
import cryingGirl from '../assets/loading/cryingGirl.json'
import okGirl from '../assets/loading/okGirl.json'
import back from '../assets/loading/back.json'
import cat from '../assets/loading/cat.json'
import correct from '../assets/loading/correct.json'
import wrong from '../assets/loading/wrong.json'

import { sendJustification } from '../functions'

export default function Justification(props) {

    const [ok, setOk] = useState(false)
    const [justification, setJustification] = useState('')
    const [sent, setSent] = useState(false)

    useEffect(() => {
        if (justification.length > 0) setOk(true)
        else setOk(false)
    }, [justification])

    const Submit = () => {
        sendJustification({ Id: props.route.params, justification })
        setSent(true)
    }

    return (
        <>
            <View style={styles.container}>

                {
                    sent
                        ?
                        <LottieView  source={crab} autoPlay />
                        :
                        <>
                            <TextInput
                                multiline
                                value={justification}
                                style={styles.justification}
                                placeholder='Manda aê o contrato kkkkkk'
                                onChangeText={text => setJustification(text)}
                                onEndEditing={() => setOk(true)}
                            />
                            <View style={styles.buttonContainer}>
                                <Button disabled={!ok} color="#841584" title='Enviar' onPress={Submit} />
                            </View>
                        </>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    justification: {
        height: 500,
        width: '100%',
        elevation: 5,
        backgroundColor: '#FFF',
        borderWidth: 5,
        borderColor: '#FFF',
        borderRadius: 20,
        elevation: 5,
        padding: 40,
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20
    }
})