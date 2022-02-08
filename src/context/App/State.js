import React, { useReducer } from 'react';
import AppReducer from './Reducer';
import AppContext from './Context';

import { ADD_EVENT } from '../types';


const AppState = (props) => {
    const initialState = {
        events: [],
        colors: ["primary", "warning", "danger"],
        selectedEvent: {}
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addEvent = event => {
        let userEvent = [...state.events]
        userEvent.push(event)
        dispatch({
            type: ADD_EVENT,
            payload: userEvent
        })
    }

    return (
        <AppContext.Provider
            value={{
                events: state.events,
                colors: state.colors,
                selectedEvent: state.selectedEvent,
                addEvent
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
