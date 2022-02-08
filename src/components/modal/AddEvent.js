import { useState } from "react";
import EventForm from "./EventForm";

const AddEvent = () => {

  const [eventTitle, setEventTitle] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [isShowTime, setIsShowTime] = useState(false);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [colorSelected, setColorSelected] = useState('');

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
  const onColorChange = () => {}
  const onDateChange = () => {}

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
        />
    </div>
  );
};

export default AddEvent;
