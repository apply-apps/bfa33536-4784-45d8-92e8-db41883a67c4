// Filename: index.js
// Combined code from all files
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, Button, View, ScrollView } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={homeStyles.container}>
            <Text style={homeStyles.title}>Kids Tales</Text>
            <View style={homeStyles.buttonContainer}>
                <Button
                    title="Tale 1"
                    onPress={() => navigation.navigate('TaleOne')}
                />
            </View>
            <View style={homeStyles.buttonContainer}>
                <Button
                    title="Tale 2"
                    onPress={() => navigation.navigate('TaleTwo')}
                />
            </View>
            <View style={homeStyles.buttonContainer}>
                <Button
                    title="Tale 3"
                    onPress={() => navigation.navigate('TaleThree')}
                />
            </View>
        </SafeAreaView>
    );
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#FFF5E1',
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

function TaleOneScreen() {
    return (
        <SafeAreaView style={taleOneStyles.container}>
            <ScrollView>
                <Text style={taleOneStyles.title}>Tale 1: The Little Red Riding Hood</Text>
                <Text style={taleOneStyles.text}>
                    Once upon a time, there was a little girl who lived in a village near the forest. Whenever she went out, she wore a red riding cloak, so everyone in the village called her Little Red Riding Hood.
                    
                    One morning, Little Red Riding Hood asked her mother if she could go to visit her grandmother as it had been awhile since they'd seen each other. "That's a good idea," her mother said. So they packed a nice basket for Little Red Riding Hood to take to her grandmother.
                    
                    When the basket was ready, the little girl put on her red cloak and kissed her mother goodbye.
                    
                    "Remember, go straight to Grandma's house," her mother cautioned. "Don't dawdle along the way and please don't talk to strangers! The woods are dangerous." ...
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const taleOneStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFDAB9',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 26,
    },
});

function TaleTwoScreen() {
    return (
        <SafeAreaView style={taleTwoStyles.container}>
            <ScrollView>
                <Text style={taleTwoStyles.title}>Tale 2: Cinderella</Text>
                <Text style={taleTwoStyles.text}>
                    Once upon a time, there was a kind girl named Cinderella. All of the animals loved her, especially two mice named Gus and Jaq. They'd do anything for the girl they called Cinderelly.

                    Cinderella lived with her stepmother and her two stepsisters, Anastasia and Drizella. They were very mean to her, making her work all day cleaning, sewing, and cooking. She tried her best to make them happy.
                    
                    One day, a messenger arrived with a special invitation. There was going to be a royal ball at the palace! The King wanted his son to find a bride.
                    
                    Every young woman in the kingdom was invited—including Cinderella! ...
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const taleTwoStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFFACD',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 26,
    },
});

function TaleThreeScreen() {
    return (
        <SafeAreaView style={taleThreeStyles.container}>
            <ScrollView>
                <Text style={taleThreeStyles.title}>Tale 3: The Three Little Pigs</Text>
                <Text style={taleThreeStyles.text}>
                    Once upon a time, there were three little pigs. One pig built a house of straw while the second pig built his house with sticks. They built their houses very quickly and then sang and danced all day because they were lazy.

                    The third little pig worked hard all day and built his house with bricks. A big bad wolf saw the two little pigs while they danced and played and thought, "What juicy tender meals they will make!" He chased the two pigs and they ran and hid in their houses.

                    The big bad wolf went to the first house and huffed and puffed and blew the house down in minutes. The frightened little pig ran to the second pig's house that was made of sticks. The big bad wolf now came to this house and huffed and puffed and blew the house down in hardly any time.
                    
                    Now, the two pigs were terrified and ran to the third pig's house that was made of bricks. The big bad wolf tried to huff and puff and blow the house down, but he could not. He kept trying for hours but the house was very strong and the little pigs were safe inside...
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const taleThreeStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#E6E6FA',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        lineHeight: 26,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="TaleOne" component={TaleOneScreen} />
                <Stack.Screen name="TaleTwo" component={TaleTwoScreen} />
                <Stack.Screen name="TaleThree" component={TaleThreeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}