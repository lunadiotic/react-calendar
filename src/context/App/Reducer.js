import { ADD_EVENT, GET_EVENTS, EDIT_EVENT, SELECT_EVENT } from '../types'

const AppReducer = (state, action) => {
    switch(action.type) {
        case ADD_EVENT: 
            return {
                ...state,
                events: action.payload,
            }
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case EDIT_EVENT:
            return {
                ...state,
                events: action.payload
            }
        case SELECT_EVENT:
            return {
                ...state,
                selectedEvent: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer