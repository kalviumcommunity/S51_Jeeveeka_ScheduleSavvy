import React, { useState } from 'react';
import '../Styles/CalendarComp.css';
import Navbar from './Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarComp = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [selectEvent, setSelectEvent] = useState(null)

  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setSelectEvent(null)
  };

  const handleSelectedEvent = (event) => {
    setShowModal(true)
    setSelectEvent(event)
    setEventTitle(event.title)
  }

  const saveEvent = () => {
    if (eventTitle && selectedDate){
      if (selectEvent){
        const updatedEvent = {...selectEvent,title: eventTitle};
        const updatedEvents = events.map((event) =>
          event === selectEvent ? updatedEvent: event
        )
        setEvents(updatedEvents)
      }else {
        const newEvent = {
                title: eventTitle,
                start: selectedDate,
                end: moment(selectedDate).add(1, 'hours').toDate(),
              };
              setEvents([...events, newEvent]);
      }
      setShowModal(false);
      setEventTitle("");
      setSelectEvent(null)
    }
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = '#9A7AF1';
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: 'none',
      display: 'block',
    };
    return {
      style: style,
    };
  };

  return (
    <>
      <Navbar />
      <div className='calendar_container'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor='start'
          endAccessor='end'
          className='calendar_component'
          selectable={true}
          onSelectSlot={handleSelectSlot}
          eventPropGetter={eventStyleGetter}
          onSelectEvent={handleSelectedEvent}
        />
        {showModal && (
          <div className='calendar_modal_overlay'>
            <div className='calendar_modal'>
              <h2>{selectEvent ? 'Edit Event' : 'Add Event'}</h2>
              <input type='text' placeholder='Event Title' value={eventTitle} onChange={(e) => setEventTitle(e.target.value)}/>
              <div className='calendar_modal_buttons'>
                <button onClick={saveEvent}>Save</button>
                <button onClick={() =>{
                  setShowModal(false)
                  setEventTitle('') 
                  setSelectEvent(null)
                  }}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CalendarComp;
