// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';
import { useState } from 'react';

const Stack = createStackNavigator();

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function AlphabetScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % ALPHABET.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + ALPHABET.length) % ALPHABET.length);
    };

    return (
        <SafeAreaView style={stylesAlphabetScreen.container}>
            <Text style={stylesAlphabetScreen.letter}>{ALPHABET[currentIndex]}</Text>
            <View style={stylesAlphabetScreen.buttonContainer}>
                <Button title="Previous" onPress={handlePrevious} />
                <Button title="Next" onPress={handleNext} />
            </View>
        </SafeAreaView>
    );
}

const stylesAlphabetScreen = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0F7FA',
    },
    letter: {
        fontSize: 120,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
});

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={stylesHomeScreen.container}>
            <Text style={stylesHomeScreen.title}>Learn to Read</Text>
            <View style={stylesHomeScreen.buttonContainer}>
                <Button
                    title="Start Learning"
                    onPress={() => navigation.navigate('Alphabet')}
                />
            </View>
        </SafeAreaView>
    );
}

const stylesHomeScreen = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#E0F7FA',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    buttonContainer: {
        marginVertical: 10,
        width: '100%',
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Alphabet" component={AlphabetScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}