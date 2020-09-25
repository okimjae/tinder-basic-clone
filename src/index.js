import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './pages/Intro';
import Main from './pages/Main';
import No from './pages/No';
import Yes from './pages/Yes';
import Doubt from './pages/Doubt';
import Justification from './pages/Justification';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EFF9F7' }}>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            {/* <Stack.Screen name="Intro" component={Intro} /> */}
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="No" component={No} />
            <Stack.Screen name="Yes" component={Yes} />
            <Stack.Screen name="Doubt" component={Doubt} />
            <Stack.Screen name="Justification" component={Justification} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;
