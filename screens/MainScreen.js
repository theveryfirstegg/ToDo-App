
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer, useNavigation } from '@react-navigation/native';
import { Keyboard, Text, View, StyleSheet, KeyboardAvoidingView, TextInput,
       TouchableOpacity, Button, Image, ScrollView, Pressable} from 'react-native';
import { useCallback, useState, useEffect, useRef, useMemo } from 'react';
import {
	BottomSheetModal,
	BottomSheetModalProvider,
	BottomSheetBackdrop,
  BottomSheetTextInput
} from '@gorhom/bottom-sheet/src'
import { addTaskList } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';


import TaskTile from '../components/TaskTile';
import TaskScreen from './TaskScreen';


import styles from './MainScreenStyles.styles';




const MainScreen = (navigation, route) => {

  const bottomSheetModalRef = useRef()

  const taskList = useSelector(state => state.task)
  const dispatch = useDispatch()


  const nav = useNavigation();

  const [listTitle, setListTitle] = useState('');
  const [listDescription, setDescription] = useState('')


  const handleAddList = (listName, description) => {
    dispatch(addTaskList({name: listName, description: description, tasks: []}))

  }


  const handlePresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, [])

  const handleCloseModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  })

  const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				opacity={0.3}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
				pressBehavior="close"
			/>
		),
		[]
	)



  return(
    <BottomSheetModalProvider>
    <View style={styles.mainLayout}>

      
      <View style={styles.titleAndPic}>

      <View style={styles.mainTopContainer}>
      <Text style={styles.mainText}> Hello, Angela </Text>
      <Text style={styles.mainTitle}> Your Lists </Text>
      </View>


      
      <View style={styles.imageContainer}>
        <Image style={styles.profilePic} source={require ('../assets/Default_pfp.svg.png')} />
      </View>

      </View>
      
      
    <ScrollView contentContainerStyle={styles.projectView}>
      { 
          taskList.map((item, index) => {
            return(
              <TaskTile key={index} listTitle={item.name} 
              listDescription={item.description} 
              onPress={() => nav.navigate('Task', {listName: item.name, taskList: item.tasks})}/>
            )
          })     
        
      }
    </ScrollView>

    <Pressable style={styles.addListButton} onPress={handlePresentModal}>
      <Text style={styles.addListText}>+</Text>
    </Pressable>
      
      <Button title='Go to Task Screen' onPress={() => {
        nav.navigate({name: 'Task', params: {listName: 'List Title Here'}})
        }} />


      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={useMemo(() => ['45%'], [])}
        backdropComponent={renderBackdrop}
        >
          <View style={styles.bottomsheetContainer}>
            <Text style={styles.title}> New List </Text>

            <Text style={styles.setTitle}> TITLE </Text>    
            <BottomSheetTextInput style={styles.titleInput}
                placeholder='Title' onChangeText={text => setListTitle(text)}/>

            <BottomSheetTextInput style={styles.titleInput} 
                placeholder='Description (optional)' 
                onChangeText={text => setDescription(text)}/>

            <Text style={[styles.setTitle, {marginTop: 8, marginBottom: 8}]}> COLOR </Text>
            <View style={styles.colorsContainer}>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: '#219C90'}]}/>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: '#E9B824'}]}/>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: '#EE9322'}]}/>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: '#D83F31'}]}/>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: '#191D88'}]}/>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: '#1450A3'}]}/>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: '#337CCF'}]}/>
              <TouchableOpacity style={[styles.colorButton, {backgroundColor: '#FFC436'}]}/>

              
              
            </View>
            


            <Pressable style={styles.confirmButton} disabled={listTitle === ''}
                onPress={() => {
                  handleCloseModal()
                  handleAddList(listTitle, listDescription)
                  setListTitle("")
                  setDescription("")
                }}>

                    <Text style={styles.confirmButtonText}>Confirm</Text>

                </Pressable>

          </View>
        
      </BottomSheetModal>


    </View>


    </BottomSheetModalProvider>

  );
}

export default MainScreen