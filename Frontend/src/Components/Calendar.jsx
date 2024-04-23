import React, { useEffect, useReducer } from 'react';
import '../Styles/Calendar.css';

const Calendar = () => {
  const today = new Date();
  
  const initialState = {
    activeDay: null,
    month: today.getMonth(),
    year: today.getFullYear(),
    eventsArr: [],
    days: [],
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
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { activeDay, month, year, eventsArr, days } = state;

  useEffect(() => {
    initCalendar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const getEvents = () => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
      dispatch({ type: 'SET_EVENTS_ARR', payload: JSON.parse(savedEvents) });
    }
  };

  const saveEvents = () => {
    localStorage.setItem("events", JSON.stringify(eventsArr));
  };

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
    dispatch({ type: 'SET_ACTIVE_DAY', payload: dayName });
  };

  const updateEvents = (date) => {
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
        </div>
        <div className="event-time">
          <span className="event-time">{event.time}</span>
        </div>
      </div>
    ));
  };

  const handleDayClick = (day) => {
    getActiveDay(day);
  };

  const handleTodayButtonClick = () => {
    const currentDate = new Date();
    const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
    dispatch({ type: 'SET_MONTH', payload: currentDate.getMonth() });
    dispatch({ type: 'SET_YEAR', payload: currentDate.getFullYear() });
    dispatch({ type: 'SET_ACTIVE_DAY', payload: dayName });
  };
   

  const handleGotoButtonClick = () => {
    const inputDate = document.querySelector(".date-input").value;
    const [inputMonth, inputYear] = inputDate.split("/");
    dispatch({ type: 'SET_MONTH', payload: parseInt(inputMonth) - 1 });
    dispatch({ type: 'SET_YEAR', payload: parseInt(inputYear) });
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
                <div key={index} className={`day ${day === today.getDate() && month === today.getMonth() ? "today" : ""} ${day === activeDay ? "active" : ""}`} onClick={() => handleDayClick(day)}>
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
            {updateEvents(activeDay)}
          </div>
        </div>
        <button className="add-event">
            <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Calendar;
