import React, { useContext, useState } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext"; 

const EditScreen = ({ navigation, route }) => {

    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find(( item ) => item.id === route.params.id )

    return <BlogPostForm 
        titleName={blogPost.title}
        contentName={blogPost.content}
        onSubmit={( title, content ) => {
            editBlogPost( blogPost.id, title, content, () => {
                route.params.goBack ? 
                navigation.pop() :
                navigation.navigate("Blog List")
            })
        }}
    />
}


export default EditScreen;