// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const tales = [
    { id: '1', title: 'The Lion and the Mouse', content: 'Once upon a time, in a dense jungle...' },
    { id: '2', title: 'The Tortoise and the Hare', content: 'Once there was a speedy hare who bragged about how fast he could run...' },
    { id: '3', title: 'The Princess and the Pea', content: 'Once upon a time, there was a prince who wanted to marry a princess...' },
];

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tales for Kids</Text>
            <View style={styles.list}>
                {tales.map((tale) => (
                    <TouchableOpacity
                        key={tale.id}
                        style={styles.button}
                        onPress={() => navigation.navigate('Tale', { tale })}
                    >
                        <Text style={styles.buttonText}>{tale.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
}

function TaleScreen({ route }) {
    const { tale } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>{tale.title}</Text>
                <Text style={styles.content}>{tale.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tale" component={TaleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    list: {
        flex: 1,
    },
    button: {
        backgroundColor: '#ADD8E6',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#000000',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        fontSize: 18,
        textAlign: 'justify',
    },
});