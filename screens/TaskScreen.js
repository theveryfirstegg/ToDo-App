import 'react-native-gesture-handler';

import { Keyboard, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

// You can import from local files
import Task from '../components/Task';
import styles from './TaskScreenStyles.styles'
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask, store} from '../app/store';



const TaskScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.task)



  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [completed, setComplete] = useState(false);

  const getTasks = (targetList) => {
    
    return taskList.map((elem) => {
      if(elem.name === targetList){
        return elem
      }
      
        return elem
      
    })

  }
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    dispatch(addTask(task, route.params.listName))
    setTask('');
    /*Sets the taskItems to whatever was already in taskItems and */
  }

  const completeTask = (taskText) => {
   
    dispatch(removeTask(taskText, route.params.listName))

  }

  return (
    <View style={styles.container}>
      <View style={styles.backArrowContainer}>
                <Icon name='chevron-circle-left' size={40} 
                onPress={() => {
                  navigation.goBack()
                }}
                type="font-awesome"/>
            </View>
      <View style={styles.taskLayout}>
        <Text style={styles.heading}> {route.params.listName} </Text>
        <View style={styles.taskContainer}>
          {
            taskList.find((elem) => elem.name === route.params.listName).tasks.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(item)}>
                  <Task text={item}/>
                </TouchableOpacity>
              );
            }) 
          }
        </View>
      </View>

    <KeyboardAvoidingView behavior='padding' style={styles.writeTaskContainer}>
      <TextInput style={styles.writeTask} placeholder='Write a task' placeholderTextColor='grey' value={task}
       onChangeText={text => setTask(text)}/>
      <TouchableOpacity style={styles.addCircle} onPress={() => handleAddTask()}>
      <View style={styles.circleContainer}>
        <Text style={styles.plusSign}>+</Text>
      </View>
      </TouchableOpacity>
   

    </KeyboardAvoidingView>
 
    </View>
  );

}

export default TaskScreen