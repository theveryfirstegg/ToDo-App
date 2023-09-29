import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'


const styles = StyleSheet.create({
  //Task Screen
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingTop: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  taskLayout: {
    flex: 6,
    paddingTop: 20
  },

  taskContainer: {
    paddingTop: 15,
    paddingHorizontal: 10
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 11
  },

  writeTaskContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
  
  },

  writeTask: {
    backgroundColor: '#FFF',
    borderRadius: 115,
    padding: 15,
    width: '100%',
    marginRight: 7,
 
  },

  addCircle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#FFF',
    marginRight: 5,
  },

  circleContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
    
  },

  plusSign: {
    color: '#DDDDDD',
    fontSize: 30,
    paddingBottom: 4
  },

  backArrowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 25,
    marginLeft: 11
  }

  

});

export default styles