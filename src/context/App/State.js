import React, { useReducer } from 'react';
import AppReducer from './Reducer';
import AppContext from './Context';
import { useLocalStorage } from '../../hooks/storage';

import { ADD_EVENT } from '../types';


const AppState = (props) => {
    const initialState = {
        events: [],
        colors: ["primary", "warning", "danger"],
        selectedEvent: {}
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [item, setValue] = useLocalStorage('events');

    const addEvent = event => {
        let userEvent = [...state.events]
        userEvent.push(event)
        setValue(userEvent)
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
