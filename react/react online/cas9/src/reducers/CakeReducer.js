const initialState = {
    cakes: 10
}
const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                cakes: action.payload - 1
            }

        default: return state;
    }
}

export default CakeReducer