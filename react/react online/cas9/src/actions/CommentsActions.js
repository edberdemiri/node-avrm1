import axios from 'axios'

export const fetchCommentsSucces = (comments) => {
    return {
        type: "FETCH_COMMENTS_SUCCESS",
        payload:comments
    }
} 
export const fetchCommentsFail = (err) => {
    return {
        type: "FETCH_COMMENTS_FAIL",
        payload:err
    }
} 

export const fetchCommentRequest = ()=>{
    return dispatch => {
        axios ({
            url:"https://jsonplaceholder.typicode.com/comments",
            method:"GET"
        })
        .then(res=>{
            dispatch(fetchCommentsSucces(res.data))
        })
        .catch(err=>{
            fetchCommentsFail(err)
        })
    }
}