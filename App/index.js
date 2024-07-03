// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';

const WORDS = ["Apple", "Ball", "Cat"];

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < WORDS.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Loop back to the first word
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.word}>{WORDS[currentIndex]}</Text>
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
    word: {
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    buttonContainer: {
        justifyContent: 'center',
        width: '60%',
    },
});