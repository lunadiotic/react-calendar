import React, { useReducer } from 'react';
import AppReducer from './Reducer';
import AppContext from './Context';
import { useLocalStorage } from '../../hooks/storage';

import { ADD_EVENT, GET_EVENTS, SELECT_EVENT } from '../types';


const AppState = (props) => {
    const initialState = {
        events: [],
        colors: ["primary", "warning", "danger"],
        selectedEvent: {}
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [item, setValue] = useLocalStorage('events');
    const [selectedItem, setSelectedItem] = useLocalStorage('selectedEvent');

    const addEvent = event => {
        let userEvent = [...state.events]
        userEvent.push(event)
        setValue(userEvent)
        dispatch({
            type: ADD_EVENT,
            payload: userEvent
        })
    }

    const getEvents = () => {
        if(item) { //check item in useLocalStorage
            dispatch({ 
                type: GET_EVENTS,
                payload: item
            })
        }
    }

    const selected = event => {
        setSelectedItem(event);
        dispatch({
            type: SELECT_EVENT,
            payload: event
        });
    }

    return (
        <AppContext.Provider
            value={{
                events: state.events,
                colors: state.colors,
                selectedEvent: state.selectedEvent,
                addEvent,
                getEvents,
                selected
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
