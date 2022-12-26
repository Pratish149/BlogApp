import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from "../context/BlogContext";
import Icon from "react-native-vector-icons/Feather"

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() =>  {
        getBlogPosts();
    }, [])

    return(
        <View>
            <FlatList 
                data={state}
                keyExtractor={(blog) => blog.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Blog Screen", { id: item.id })} >
                            <View style={styles.viewStyle}>
                                <Text style={styles.textStyle} >{item.title}</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <TouchableOpacity onPress={() => navigation.navigate("Edit Blog",{ id: item.id, goBack: false })} >
                                        <Icon name="edit" size={25} color="green" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
                                        <Icon name="trash" size={25} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: 'black',
        margin: 5,
    },
    textStyle: {
        fontSize: 16,
        fontWeight:  'bold'
    }
})

export default IndexScreen;