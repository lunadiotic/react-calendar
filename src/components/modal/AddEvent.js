import moment from "moment";
import { useState, useContext } from "react";
import EventForm from "./EventForm";
import AppContext from '../../context/App/Context'

const AddEvent = () => {

  const [eventTitle, setEventTitle] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [isShowTime, setIsShowTime] = useState(false);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [colorSelected, setColorSelected] = useState('');

  // const colors = ["primary", "warning", "danger"];

  const appContext = useContext(AppContext);
  const { addEvent, events, colors, selectedEvent} = appContext;

  const onEventTitleChange = (event) => {
    setEventTitle(event.target.value)
  }
  const onCheckboxChange = (event) => {
    if(event.target.checked === true) {
      setIsShowTime(true)
      setCheckbox(true)
    } else {
      setIsShowTime(false)
      setCheckbox(false)
    }
  }
  const onDateChange = (propertyName) => event => {
    if (propertyName === 'start') {
      setDateStart(event)
    }
    if (propertyName === 'end') {
      setDateEnd(event)
    }
  }
  const onColorChange = (event) => {
    if (event.target.value !== '-') {
      setColorSelected(event.target.value)
    } else {
      setColorSelected('-')
    }
  }

  const setEvent = id => {
    let start = ''
    let end = ''
    if (!checkbox) {
      start = `${moment(dateStart).format()}`
      end = `${moment(dateEnd).format()}`
    } else{
      start = `${moment(dateStart).format('YYYY-MM-DD')}`
      end = `${moment(dateEnd).format('YYYY-MM-DD')}`
    }

    const event = {
      id,
      title: eventTitle,
      start,
      end,
      color: colorSelected
    }

    return event;
  }

  const reset = () => {
    setColorSelected('');
    setEventTitle('');
    setCheckbox(false);
    setIsShowTime(false);
    setDateStart(new Date());
    setDateEnd(new Date());
  }

  const eventSubmit = () => {
    const event = setEvent(events.length + 1);
    // add event to events array using context
    console.log(event);
    addEvent(event);
    reset();
  }

  return (
    <div id="">
        <EventForm 
          eventTitle={eventTitle}
          dateStart={dateStart}
          dateEnd={dateEnd}
          checkbox={checkbox}
          colorSelected={colorSelected}
          colorsOption={['primary', 'warning', 'danger']}
          eventTitleChange={onEventTitleChange}
          checkboxChange={onCheckboxChange}
          colorChange={onColorChange}
          dateChange={onDateChange}
          isShowTime={isShowTime}
          eventSubmit={eventSubmit}
        />
    </div>
  );
};

export default AddEvent;
