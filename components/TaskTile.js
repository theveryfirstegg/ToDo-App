import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function TaskTile(props) {
  return(
    <TouchableOpacity>
      <View style={[styles.container, {backgroundColor: props.color}]}>
        <View style={styles.titleContainer}>
        <Text style={styles.tileTitle}> {props.listTitle} </Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.tileDescription}> {props.listDescription} </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.optionsButton}>
            <Text style={styles.optionText}> ... </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton} onPress={props.onPress}>
            <Text style={styles.plusText}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 180,
    borderRadius: 30,
    justifyContent: 'center',
    padding: 14,
    marginBottom: 10
  },

  tileTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 600
  },

  titleContainer: {
    marginBottom: 4

  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  optionsButton: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.3

  },

  optionText: {
    color: 'black',
    fontSize: 30,

  },

  addButton: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.3
  },

  plusText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 200
  },

  tileDescription: {
    fontSize: 17,
    color: 'white',


  },

  descriptionContainer: {
    flex: 1,
    justifyContent: 'flex-start'

  }



  
});