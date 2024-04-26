import React, { useState, useEffect, useReducer } from 'react';
import '../Styles/Calendar.css';

const Calendar = () => {
  const today = new Date();

  const initialState = {
    activeDay: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
    eventsArr: [],
    days: [],
    showEventForm: false,
    showEditEventForm: false,
    eventTitle: '',
    startTime: '',
    endTime: '',
    eventToEdit: null,
    editedEventTitle: '',
    editedStartTime: '',
    editedEndTime: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_ACTIVE_DAY':
        return { ...state, activeDay: action.payload };
      case 'SET_MONTH':
        return { ...state, month: action.payload };
      case 'SET_YEAR':
        return { ...state, year: action.payload };
      case 'SET_EVENTS_ARR':
        return { ...state, eventsArr: action.payload };
      case 'SET_DAYS':
        return { ...state, days: action.payload };
      case 'OPEN_EVENT_FORM':
        return { ...state, showEventForm: true };
      case 'CLOSE_EVENT_FORM':
        return { ...state, showEventForm: false };
      case 'OPEN_EDIT_EVENT_FORM':
        return { ...state, showEditEventForm: true };
      case 'CLOSE_EDIT_EVENT_FORM':
        return { ...state, showEditEventForm: false };
      case 'SET_EVENT_TITLE':
        return { ...state, eventTitle: action.payload };
      case 'SET_START_TIME':
        return { ...state, startTime: action.payload };
      case 'SET_END_TIME':
        return { ...state, endTime: action.payload };
      case 'SET_EVENT_TO_EDIT':
        return { ...state, eventToEdit: action.payload };
      case 'SET_EDITED_EVENT_TITLE':
        return { ...state, editedEventTitle: action.payload };
      case 'SET_EDITED_START_TIME':
        return { ...state, editedStartTime: action.payload };
      case 'SET_EDITED_END_TIME':
        return { ...state, editedEndTime: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { activeDay, month, year, eventsArr, days, showEventForm, showEditEventForm, eventTitle, startTime, endTime, eventToEdit, editedEventTitle, editedStartTime, editedEndTime } = state;

  useEffect(() => {
    initCalendar();
    const currentDate = today.getDate();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'short' });
    dispatch({ type: 'SET_ACTIVE_DAY', payload: currentDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const initCalendar = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const lastDayOfWeek = lastDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.

    const daysArray = [];

    // Add blank cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      daysArray.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    // Add blank cells for days after the last day of the month
    for (let i = lastDayOfWeek + 1; i < 7; i++) {
      daysArray.push(null);
    }

    dispatch({ type: 'SET_DAYS', payload: daysArray });
  };

  const prevMonth = () => {
    if (month === 0) {
      dispatch({ type: 'SET_MONTH', payload: 11 });
      dispatch({ type: 'SET_YEAR', payload: year - 1 });
    } else {
      dispatch({ type: 'SET_MONTH', payload: month - 1 });
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      dispatch({ type: 'SET_MONTH', payload: 0 });
      dispatch({ type: 'SET_YEAR', payload: year + 1 });
    } else {
      dispatch({ type: 'SET_MONTH', payload: month + 1 });
    }
  };

  const getActiveDay = (date) => {
    const day = new Date(year, month, date);
    const dayName = day.toString().split(" ")[0];
    dispatch({ type: 'SET_ACTIVE_DAY', payload: date });
  };

  const handleDayClick = (day) => {
    // Check if the clicked day is null (empty box)
    if (day === null) {
      return;
    }
  
    // Check if the clicked day is within the current month
    const clickedDate = new Date(year, month, day);
    const clickedMonth = clickedDate.getMonth();
    
    if (clickedMonth === month) {
      // If the clicked day is in the current month, update the active day only
      dispatch({ type: 'SET_ACTIVE_DAY', payload: day });
    } else {
      // If the clicked day is in a different month, update both the month and the active day
      dispatch({ type: 'SET_MONTH', payload: clickedMonth });
      dispatch({ type: 'SET_YEAR', payload: clickedDate.getFullYear() });
      dispatch({ type: 'SET_ACTIVE_DAY', payload: day });
    }
  };
  

  const handleTodayButtonClick = () => {
    const currentDate = new Date();
    dispatch({ type: 'SET_MONTH', payload: currentDate.getMonth() });
    dispatch({ type: 'SET_YEAR', payload: currentDate.getFullYear() });
    dispatch({ type: 'SET_ACTIVE_DAY', payload: currentDate.getDate() });
  };

  const handleGotoButtonClick = () => {
    const inputDate = document.querySelector(".date-input").value;
    const [inputMonth, inputYear] = inputDate.split("/");
    dispatch({ type: 'SET_MONTH', payload: parseInt(inputMonth) - 1 });
    dispatch({ type: 'SET_YEAR', payload: parseInt(inputYear) });
  };

  const handleAddEventClick = () => {
    dispatch({ type: 'OPEN_EVENT_FORM' });
  };

  const handleCloseEventForm = () => {
    dispatch({ type: 'CLOSE_EVENT_FORM' });
    dispatch({ type: 'SET_EVENT_TITLE', payload: '' });
    dispatch({ type: 'SET_START_TIME', payload: '' });
    dispatch({ type: 'SET_END_TIME', payload: '' });
  };

  const handleCloseEditEventForm = () => {
    dispatch({ type: 'CLOSE_EDIT_EVENT_FORM' });
    dispatch({ type: 'SET_EDITED_EVENT_TITLE', payload: '' });
    dispatch({ type: 'SET_EDITED_START_TIME', payload: '' });
    dispatch({ type: 'SET_EDITED_END_TIME', payload: '' });
  };

  const handleEventTitleChange = (e) => {
    dispatch({ type: 'SET_EVENT_TITLE', payload: e.target.value });
  };

  const handleStartTimeChange = (e) => {
    dispatch({ type: 'SET_START_TIME', payload: e.target.value });
  };

  const handleEndTimeChange = (e) => {
    dispatch({ type: 'SET_END_TIME', payload: e.target.value });
  };

  const handleEditEventTitleChange = (e) => {
    dispatch({ type: 'SET_EDITED_EVENT_TITLE', payload: e.target.value });
  };

  const handleEditedStartTimeChange = (e) => {
    dispatch({ type: 'SET_EDITED_START_TIME', payload: e.target.value });
  };

  const handleEditedEndTimeChange = (e) => {
    dispatch({ type: 'SET_EDITED_END_TIME', payload: e.target.value });
  };

  const updateEvents = (date) => {
    console.log("Updating events for date:", date);
    const filteredEvents = eventsArr.filter(event =>
      date === event.day &&
      month + 1 === event.month &&
      year === event.year
    );
  
    return filteredEvents.map((event, index) => (
      <div key={index} className="event">
        <div className="title">
          <i className="fas fa-circle"></i>
          <h3 className="event-title">{event.title}</h3>
          {/* Add the Edit button here */}
          <button className="edit-event-link" onClick={() => handleEditLinkClick(event)}>Edit</button>
        </div>
        <div className="event-time">
          <span className="event-time">{event.time}</span>
        </div>
      </div>
    ));
    
  };
  
  const handleEditLinkClick = (event) => {
    console.log("Edit Link Clicked");
    console.log("Event:", event);
    console.log("Current showEditEventForm state:", showEditEventForm);
    dispatch({ type: 'SET_EVENT_TO_EDIT', payload: event });
    dispatch({ type: 'SET_EDITED_EVENT_TITLE', payload: event.title });
    dispatch({ type: 'SET_EDITED_START_TIME', payload: event.time.split(' - ')[0] });
    dispatch({ type: 'SET_EDITED_END_TIME', payload: event.time.split(' - ')[1] });
    dispatch({ type: 'OPEN_EDIT_EVENT_FORM' });
  };
  
  
  // const handleEditEvent = (event) => {
  //   dispatch({ type: 'SET_EVENT_TO_EDIT', payload: event });
  //   dispatch({ type: 'SET_EDITED_EVENT_TITLE', payload: event.title });
  //   dispatch({ type: 'SET_EDITED_START_TIME', payload: event.time.split(' - ')[0] });
  //   dispatch({ type: 'SET_EDITED_END_TIME', payload: event.time.split(' - ')[1] });
  //   dispatch({ type: 'OPEN_EDIT_EVENT_FORM' });
  // };
  

  const renderTimeOptions = () => {
    const timeOptions = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        const time = `${formattedHour}:${formattedMinute}`;
        timeOptions.push(
          <option key={time} value={time}>{time}</option>
        );
      }
    }
    return timeOptions;
  };

  const handleSubmitEvent = () => {
    const newEvent = {
      day: activeDay,
      month: month + 1,
      year: year,
      title: eventTitle,
      time: `${startTime} - ${endTime}`
    };
    dispatch({ type: 'SET_EVENTS_ARR', payload: [...eventsArr, newEvent] });
    dispatch({ type: 'CLOSE_EVENT_FORM' });
    dispatch({ type: 'SET_EVENT_TITLE', payload: '' });
    dispatch({ type: 'SET_START_TIME', payload: '' });
    dispatch({ type: 'SET_END_TIME', payload: '' });
  };

  const handleSaveEditedEvent = () => {
    dispatch({ type: 'CLOSE_EDIT_EVENT_FORM' });
  };
  

  return (
    <div className='calendar_component'>
      <div className="calendar_container">
        <div className="left">
          <div className="calendar">
            <div className="month">
              <i className="fas fa-angle-left prev" onClick={prevMonth}></i>
              <div className="date">{months[month]} {year}</div>
              <i className="fas fa-angle-right next" onClick={nextMonth}></i>
              </div>
            <div className="weekdays">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="days">
              {days.map((day, index) => (
               <div key={index} id={`day-${day}`} className={`day ${day === activeDay ? "selected-day" : ""}`} onClick={() => handleDayClick(day)}>
                {day}
                </div>
              ))}
            </div>
            <div className="goto-today">
              <div className="goto">
                <input type="text" placeholder="mm/yyyy" className="date-input" />
                <button className="goto-btn" onClick={handleGotoButtonClick}>Go</button>
              </div>
              <button className="today-btn" onClick={handleTodayButtonClick}>Today</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="today-date">
            <div className="event-day">{activeDay}</div>
            <div className="event-date">{months[month]} {year}</div>
          </div>
          <div className="events">
            {/* Display events */}
            {updateEvents(activeDay)}

            {/* Add event form modal */}
            {showEventForm && (
              <div className="add-event-wrapper active">
                <div className="add-event-header">
                  <div className="calendar_title">Add Event</div>
                  <div className="event_close" onClick={handleCloseEventForm}>✖</div>
                </div>
                <div className="add-event-body">
                  <input type="text" className='event_text' value={eventTitle} onChange={handleEventTitleChange} placeholder="Event Title" />
                  <select className="event_text" value={startTime} onChange={handleStartTimeChange}>
                    <option value="">Select Start Time</option>
                    {renderTimeOptions()}
                  </select>
                  <select className="event_text" value={endTime} onChange={handleEndTimeChange}>
                    <option value="">Select End Time</option>
                    {renderTimeOptions()}
                  </select>
                </div>
                <div className="add-event-footer">
                  <button className="add-event-btn" onClick={handleSubmitEvent}>Add Event</button>
                </div>
              </div>
            )}

            {/* Edit event form modal */}
            {showEditEventForm && (
              <div className="edit-event-wrapper active">
                <div className="edit-event-header">
                  <div className="calendar_title">Edit Event</div>
                  <div className="event_close" onClick={handleCloseEditEventForm}>✖</div>
                </div>
                <div className="edit-event-body">
                  <input type="text" className='event_text' value={editedEventTitle} onChange={handleEditEventTitleChange} placeholder="Event Title" />
                  <select className="event_text" value={editedStartTime} onChange={handleEditedStartTimeChange}>
                    <option value="">Select Start Time</option>
                    {renderTimeOptions()}
                  </select>
                  <select className="event_text" value={editedEndTime} onChange={handleEditedEndTimeChange}>
                    <option value="">Select End Time</option>
                    {renderTimeOptions()}
                  </select>
                </div>
                <div className="edit-event-footer">
                  <button className="save-edited-event-btn" onClick={handleSaveEditedEvent}>Save Changes</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="add-event" onClick={handleAddEventClick}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Calendar;
