import React, { useEffect, useState } from 'react';
import {
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

export default function Doubt(props) {

    const [answer, setAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(null)
    const [answerBorder, setAnswerBorder] = useState('#FFF')

    const rightAnswer = 'i<3u'
    const notCoolAnswer = '3u>i'
    const ValidateAnswer = () => {
        if (answer.toLowerCase().replace(/\s/g, '') == rightAnswer || answer.toLowerCase().replace(/\s/g, '') == notCoolAnswer) {
            setIsCorrect(true)
            setTimeout(() => {
                props.navigation.navigate('Justification', props.route.params)
            }, 2000)
        } else {
            setIsCorrect(false)
        }
    }

    useEffect(() => {
        if (isCorrect) setAnswerBorder('#B9EFA3')
        else if (isCorrect == false) setAnswerBorder('#FFA2CB')
        else setAnswerBorder('#FFF')
    }, [isCorrect])

    return (
        <>
            <LottieView source={cat} autoPlay loop style={{ width: 300, position: 'absolute', top: -20 }} />
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.question}>Resolva a equação para seguir em frente:</Text>
                    <Text style={styles.equation}>9x - 7i &gt; 3(3x - 7u)</Text>
                </View>
                <TextInput
                    style={[styles.answer, { borderColor: answerBorder }]}
                    value={answer}
                    placeholder="Resposta"
                    onChangeText={text => setAnswer(text)}
                    onEndEditing={ValidateAnswer}
                    onFocus={() => setIsCorrect(null)}
                />
            </View>
            {isCorrect && <LottieView source={correct} autoPlay loop={false} style={{ width: '100%', position: 'absolute', bottom: 0 }} />}
            {isCorrect == false && <LottieView source={wrong} autoPlay loop={false} style={{ width: '100%', maxHeight: 150, position: 'absolute', bottom: 0 }} />}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        backgroundColor: '#FFF',
        borderWidth: 5,
        borderColor: '#FFF',
        borderRadius: 20,
        margin: 20,
        elevation: 5,
        padding: 40
    },
    question: {
        fontSize: 20,
        marginBottom: 30,
        fontWeight: 'bold'
    },
    equation: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    answer: {
        backgroundColor: '#FFF',
        borderWidth: 5,
        // borderColor: '#FFF',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        elevation: 5,
        padding: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        margin: 20
    }
})