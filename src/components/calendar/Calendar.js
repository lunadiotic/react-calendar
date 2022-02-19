import React, { useContext } from 'react';
import AppContext from '../../context/App/Context'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = (props) => {
    const appContext = useContext(AppContext)
    const { events } = appContext
    return (
        <div className='col-9'>
            <FullCalendar
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    height={700}
                    contentHeight={700}
                    events={events}
                />
        </div>
    );
};

export default Calendar;
