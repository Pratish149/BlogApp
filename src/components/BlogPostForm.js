import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const BlogPostForm  = ({ titleName, contentName, onSubmit }) => {

    const [title, setTitle] = useState(titleName)
    const [content,setContent] = useState(contentName);

    return(
        <View>
            <View style={styles.viewStyle} >
                <Text style={styles.textStyle} >Edit Title:</Text>
                <TextInput 
                    style={styles.inputStyle}
                    value={title}
                    onChangeText={(newText) => setTitle(newText)}
                />
            </View>
            <View style={styles.viewStyle} >
                <Text style={styles.textStyle} >Edit Content:</Text>
                <TextInput 
                    style={styles.inputStyle}
                    value={content}
                    onChangeText={(newText) => setContent(newText)}
                />
            </View>
            <Button 
                title="Save"
                onPress={() => onSubmit( title, content )}
            />
        </View>
    )
}

BlogPostForm.defaultProps =  {

    titleName: "",
    contentName: ""
}

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
        fontSize: 17
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    viewStyle: {
        marginHorizontal: 5,
        marginVertical: 15
    }
})

export default BlogPostForm;