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
    paddingTop: 30
  },

  taskContainer: {
    paddingTop: 20,
    paddingHorizontal: 10
  },

  heading: {
    fontSize: 20,
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

  //Main Screen
  mainLayout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8

  },

  mainText: {
    fontSize: 18,
    fontWeight: '300',
    marginLeft: 4
  },

  mainTitle: {
    fontSize: 45,
    fontWeight: '700',
    
  },

  projectView: {
    alignItems: 'center',

  },

  addListButton: {
    backgroundColor: '#bdbcbb',
    borderRadius: 20,
    marginBottom: 25

  },

  addListText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    fontWeight: '500'
  },

  mainTopContainer: {
    marginTop: 60,
    marginBottom: 10

  },

  imageContainer: {
    marginRight: 20,
    marginTop: 19
  },

  profilePic: {
    width: 70,
    height: 70,
  },

  titleAndPic: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 43,
    fontWeight: "700",
    marginBottom: 10,
},

setTitle: {
    marginLeft: 6,
    color: "#808080"
    
},

formContainer: {
    flexDirection: "column"
},

titleInput: {
    padding: 13,
    borderWidth: 1,
    borderColor:'#c7c8c9',
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 10
    
},

backArrowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
},

backArrow: {
    

},

confirmButton: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 13,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'black',
    marginHorizontal: 10

},

confirmButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    
},

bottomsheetContainer: {
  paddingHorizontal: 10

},

colorsContainer: {
  padding: 5,
  flexDirection: 'row',
  justifyContent: 'center',

},

colorButton: {
  borderRadius: 50,
  width: 30,
  height: 30,
  marginHorizontal: 5

}
});

export default styles