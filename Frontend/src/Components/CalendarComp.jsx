import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/CalendarComp.css';
import Navbar from './Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const localizer = momentLocalizer(moment);

const CalendarComp = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectEvent, setSelectEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/gettasks');
      const validatedEvents = response.data.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
        title: event.title || 'Untitled Event', // Handle missing title gracefully
      }));
      setEvents(validatedEvents);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Error fetching events. Please try again later.');
      setLoading(false);
    }
  };

  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(slotInfo.start);
    setEventTitle('');
    setStartTime(moment(slotInfo.start).format('YYYY-MM-DDTHH:mm'));
    setEndTime(moment(slotInfo.start).add(1, 'hours').format('YYYY-MM-DDTHH:mm'));
    setSelectEvent(null);
  };

  const handleSelectedEvent = (event) => {
    setShowModal(true);
    setSelectEvent(event);
    setEventTitle(event.title || ''); // Handle potential undefined title
    setStartTime(moment(event.start).format('YYYY-MM-DDTHH:mm'));
    setEndTime(moment(event.end).format('YYYY-MM-DDTHH:mm'));
  };

  const saveEvent = async () => {
    if (eventTitle && startTime && endTime) {
      const start = new Date(startTime);
      const end = new Date(endTime);

      if (end <= start) {
        toast.error("End time must be after start time");
        return;
      }

      const eventPayload = {
        ID: selectEvent ? selectEvent.ID : uuidv4(), // Generate new ID for new event
        title: eventTitle,
        start,
        end,
      };

      try {
        if (selectEvent) {
          const response = await axios.patch(`http://localhost:3000/updatetask/${selectEvent._id}`, eventPayload);
          setEvents(events.map(event => (event._id === selectEvent._id ? { ...response.data, start, end } : event)));
        } else {
          const response = await axios.post('http://localhost:3000/posttask', eventPayload);
          setEvents([...events, { ...response.data, start, end }]);
        }
        setShowModal(false);
        resetForm();
      } catch (error) {
        console.error('Error saving event:', error);
      }
    }
  };

  const deleteEvent = async () => {
    if (selectEvent) {
      try {
        await axios.delete(`http://localhost:3000/deletetask/${selectEvent._id}`);
        setEvents(events.filter(event => event._id !== selectEvent._id));
        setShowModal(false);
        resetForm();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const resetForm = () => {
    setEventTitle('');
    setStartTime('');
    setEndTime('');
    setSelectEvent(null);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = '#9A7AF1';
    const style = {
      backgroundColor,
      borderRadius: '5px',
      color: 'white',
      border: 'none',
    };
    return {
      style: style,
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className='calendar_container'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor='start'
          endAccessor='end'
          titleAccessor='title' // Ensure this matches the property name in each event object
          className='calendar_component'
          selectable={true}
          onSelectEvent={handleSelectedEvent}
          onSelectSlot={handleSelectSlot}
          eventPropGetter={eventStyleGetter}
        />
        {showModal && (
          <div className='calendar_modal_overlay'>
            <div className='calendar_modal'>
              <h2>{selectEvent ? 'Edit Event' : 'Add Event'}</h2>
              <input
                type='text'
                placeholder='Event Title'
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
              <input
                type='datetime-local'
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <input
                type='datetime-local'
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
              <div className='calendar_modal_buttons'>
                <button onClick={saveEvent}>Save</button>
                <button onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}>Cancel</button>
                {selectEvent && (
                  <button type='button' id='calendar_modal_delete' onClick={deleteEvent}>Delete Event</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default CalendarComp;
