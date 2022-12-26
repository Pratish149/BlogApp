import React, { useContext, useState } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const CreateScreen =  ({ navigation }) => {

    const { addBlogPost } = useContext(Context);

    return <BlogPostForm 
        onSubmit={( title, content ) => {
            addBlogPost( title, content, () => {
                navigation.push("Blog List")
            })
        }}
    />
}

export default CreateScreen;