
export default function (state = {}, action) {
    switch (action.type) {

        case 'GET_all_PLANETS':
            return {
                ...state,
                all: action.payload,
            }
        case 'GET_SELECTED_PLANET':
            return {
                ...state,
                selected: [action.payload]
            }
        case 'CLEAR_PLANET':
            return {
                ...state,
                selected: action.payload
            }

        default:
            return state;
    }
}