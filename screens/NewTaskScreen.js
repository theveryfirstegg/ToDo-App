import { Keyboard, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, 
        Button, ScrollView, Switch } from 'react-native';
import { useState } from 'react'
import styles from './NewTaskScreenStyles.styles'


const NewTaskScreen = () => {

    const [dateEnabled, enableDate] = useState(false)

    const toggleDate = () => {
        enableDate(previousState => !previousState)
    }
    
    return (
        <View style={styles.mainLayout}>

            <Text style={styles.title}>New Task</Text>

            <View style={styles.dateTimeContainer}>

                <View style={styles.dateContainer}>
                    <Text style={styles.dateTitle}>Date</Text>

                    <Switch 

                    />
                </View>

                <View style={styles.timeContainer}>
                    <Text style={styles.timeTitle}>Time</Text>

                    <Switch />

                </View>
                
                



            </View>



        </View>
    )



}

export default NewTaskScreen