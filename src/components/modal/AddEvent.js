import EventForm from "./EventForm";

const AddEvent = () => {
  const onEventTitleChange = () => {}
  const onCheckboxChange = () => {}
  const onColorChange = () => {}
  const onDateChange = () => {}

  return (
    <div id="">
        <EventForm 
          eventTitle="Watch Movies"
          dateStart={new Date()}
          dateEnd={new Date()}
          checkbox={false}
          colorSelected="primary"
          colorsOption={['primary', 'warning', 'danger']}
          eventTitleChange={onEventTitleChange}
          checkboxChange={onCheckboxChange}
          colorChange={onColorChange}
          dateChange={onDateChange}
          isShowTime={false}
        />
    </div>
  );
};

export default AddEvent;
