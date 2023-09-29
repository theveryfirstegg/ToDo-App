
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
        snapPoints={useMemo(() => ['40%'], [])}
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

            <Pressable style={styles.confirmButton} 
                onPress={() => {
                  handleCloseModal()
                  handleAddList(listTitle, listDescription)

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