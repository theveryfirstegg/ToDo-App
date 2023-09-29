import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 8,
        paddingTop: 50
    },

    title: {
        fontSize: 45,
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
        
    }

   


})

export default styles