import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({

mainLayout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8
},

title: {
    fontSize: 45,
    fontWeight: "700"
},

dateTimeContainer: {
    backgroundColor: 'white',
    borderRadius: 20
},

dateContainer: {
    borderWidth: 1,
    borderColor: '#ecf0f1',
    padding: 13,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
},

dateTitle: {
    fontSize: 20
},

timeContainer: {
    borderWidth: 1,
    borderColor: '#ecf0f1',
    padding: 13,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'

},

timeTitle: {
    fontSize: 20
}


});

export default styles