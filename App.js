import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
import { Keyboard, Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';

import TaskTile from './components/TaskTile';
import MainScreen from './screens/MainScreen';
import TaskScreen from './screens/TaskScreen';
import NewTaskScreen from './screens/NewTaskScreen';
import NewListScreen from './screens/NewListScreen';
import { Provider, useDispatch } from 'react-redux'
import rootReducer from './reducers/taskReducer';
import store from './app/store';



const Stack = createStackNavigator();


export default function App() {


  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='Task' component={TaskScreen} />
        <Stack.Screen name='CreateList' component={NewListScreen} />
        <Stack.Screen name='CreateTask' component={NewTaskScreen} />

     </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

