// Filename: index.js
// Combined code from all files

import 'react-native-gesture-handler';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const tales = [
  {
    title: "The Tortoise and the Hare",
    content: "Once upon a time, there was a tortoise who challenged a hare to a race. The hare was so confident that he would win, he took a nap during the race. The tortoise moved slowly but steadily and eventually won the race."
  },
  {
    title: "The Boy Who Cried Wolf",
    content: "A shepherd boy enjoyed tricking the villagers by crying out that a wolf was attacking his flock. When a wolf really did appear, the villagers didn't believe him, and the wolf ate all the sheep."
  },
  {
    title: "Goldilocks and the Three Bears",
    content: "Goldilocks entered the house of the three bears and ate their food, sat in their chairs, and slept in their beds. When the bears returned, they found her sleeping and she ran away, never to return."
  }
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tale App for Kids</Text>
      {tales.map((tale, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button
            title={tale.title}
            onPress={() => navigation.navigate('Tale', { tale })}
          />
        </View>
      ))}
    </SafeAreaView>
  );
}

function TaleScreen({ route }) {
  const { tale } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{tale.title}</Text>
      <Text style={styles.content}>{tale.content}</Text>
    </SafeAreaView>
  );
}

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
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F7FA',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});