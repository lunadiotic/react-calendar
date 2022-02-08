import React, { useReducer } from 'react';
import AppReducer from './Reducer';
import AppContext from './Context';


const AppState = (props) => {
    const initialState = {
        events: [],
        colors: ["primary", "warning", "danger"],
        selectedEvent: {}
    };

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider
            value={{
                events: state.events,
                colors: state.colors,
                selectedEvent: state.selectedEvent
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
