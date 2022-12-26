import jsonServer from "../api/jsonServer";
import createContextData from "./createContextData";

const blogReducer = (state,action) =>  {

    switch(action.type) {
        case 'delete_blogPost': 
            return state.filter(( item ) => {
                return item.id !== action.payload;
            })
        
        case 'edit_blogPost':
            return state.map(( item ) => {
                return item.id === action.payload.id ? action.payload : item;
            })

        case 'get_blogPosts':
            return action.payload;
        
        default:
            return state;
    }
}

const getBlogPosts = dispatch  => {
    return  async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: "get_blogPosts",  payload: response.data })
    }
}

const addBlogPost = () => {
    return async ( title, content, callback ) => {
        await jsonServer.post('/blogposts', { title, content })
         if(callback) callback();
    }
}

const deleteBlogPost = ( dispatch ) => {
    return async ( id ) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogPost', payload: id })
    }
}

const editBlogPost = ( dispatch ) => {
    return async ( id, title, content, callback ) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content })
        dispatch({ type: 'edit_blogPost', payload: {id, title, content} });
        if(callback) callback();
    }
} 

export const { Context, Provider } = createContextData(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
)