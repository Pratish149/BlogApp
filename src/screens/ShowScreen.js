import React, { useContext } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Context } from "../context/BlogContext";
//import Icon from "react-native-vector-icons/Feather"

const ShowScreen  = ({ route }) =>  {

    const { state } = useContext(Context);

    const blogPost = state.find((item) => item.id === route.params.id )

    return(
        <View style={styles.viewStyle} >
            <Text style={styles.headingStyle}>{blogPost.title}</Text>
            <Text style={styles.textStyle}>{blogPost.content}</Text>
        </View>
    )
}

// ShowScreen.navigationOptions = ({ navigation }) => {
//     return{
//         headerRight: () => (
//             <TouchableOpacity onPress={() => navigation.navigate('Edit Blog')} >
//                 <Icon name="edit-2" size={25} color="black" />
//             </TouchableOpacity>
//         )
//     }
// }

const styles = StyleSheet.create({
    headingStyle: {
        margin: 10,
        fontSize: 20,
        color: "black",
        fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 17,
        margin: 10
    },
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 5
    }
});

export default ShowScreen;