// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';

const WORDS = ["Apple", "Ball", "Cat"];
const getLetters = (word) => word.split('');

export default function App() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const currentWord = WORDS[currentWordIndex];
    const letters = getLetters(currentWord);

    const handleNext = () => {
        if (currentLetterIndex < letters.length - 1) {
            setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
            if (currentWordIndex < WORDS.length - 1) {
                setCurrentWordIndex(currentWordIndex + 1);
                setCurrentLetterIndex(0);
            } else {
                setCurrentWordIndex(0); // Loop back to the first word
                setCurrentLetterIndex(0);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.letter}>{letters[currentLetterIndex]}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Next" onPress={handleNext} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0F7FA',
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    buttonContainer: {
        justifyContent: 'center',
        width: '60%',
    },
});