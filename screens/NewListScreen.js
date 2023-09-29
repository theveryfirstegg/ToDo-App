
import { useState } from 'react';
import styles from './NewListScreen.styles'
import { Keyboard, Text, View, KeyboardAvoidingView, 
        TextInput, Pressable, ScrollView, } from 'react-native';
import { Icon } from 'react-native-elements'

const NewListScreen = ({navigation, route}) => {
    
    
    const [newList, setNewList] = useState()
    const [newListArr, setListArr] = useState()
    const [listTitle, setListTitle] = useState('');
    const [listDescription, setDescription] = useState('')


    


    return(
        <View style={styles.mainLayout}>

            <View style={styles.backArrowContainer}>
                <Icon name='chevron-left' size={50} 
                iconStyle={styles.backArrow} 
                onPress={() => navigation.navigate('Main')}/>
            </View>

            <Text style={styles.title}> New List </Text>

            <Text style={styles.setTitle}> TITLE </Text>

            <View style={styles.formContainer}>
                <TextInput style={styles.titleInput}
                placeholder='Title' onChangeText={text => setListTitle(text)}/>

                <TextInput style={styles.titleInput} 
                placeholder='Description (optional)' 
                onChangeText={text => setDescription(text)}/>

                <Pressable style={styles.confirmButton} 
                onPress={() => {}
                }>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </Pressable>


            </View>

        </View>


    )


}

export default NewListScreen