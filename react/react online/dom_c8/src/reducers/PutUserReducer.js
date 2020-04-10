const initialState = {
    user: ""
}

const putUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PUT_USER":
            return {
                ...state,
                user: action.payload
            }
            default:
                return state;
    }
}

export default putUserReducer;