import React, { useContext } from 'react';
import AppContext from '../../context/App/Context'
import AddEvent from '../modal/AddEvent';
import EditEvent from '../modal/EditEvent';
import SelectedModal from '../modal/SelectedModal';

const Sidebar = () => {
    const appContext = useContext(AppContext)
    const { events, selectEvent } = appContext
    return (
        <div className='col-3'>
            <div className="d-grid gap-2">
                <button 
                    data-bs-toggle="modal"
                    data-bs-target="#add-event"
                    className="btn btn-primary">
                    Create New Event
                </button>
            </div>
            <div className="m-t-20 text-white">
                <br />
                {
                    events.length > 0 ?
                    events.map((event, index) => (
                        <div 
                            className='my-1 p-2' 
                            style={{backgroundColor: event.color}} 
                            key={index}
                            onClick={() => selectEvent(event)}
                            data-bs-toggle="modal"
                            data-bs-target="#select-event"
                        >
                            {event.title}
                        </div>
                    ))
                    :
                    'Empty events'
                }
            </div>

            <AddEvent/>
            <EditEvent/>
            <SelectedModal/>
        </div>
    );
};

export default Sidebar;
