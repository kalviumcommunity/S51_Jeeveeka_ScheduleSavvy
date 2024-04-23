import React, { useState, useEffect } from 'react';
import '../Styles/Calendar.css';

const Calendar = () => {
  const [today, setToday] = useState(new Date());
  const [activeDay, setActiveDay] = useState(null);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [eventsArr, setEventsArr] = useState([]);
  const [days, setDays] = useState([]); // Initialize as an empty array
  const [openAddEventModal, setOpenAddEventModal] = useState(true);
  const [eventName, setEventName] = useState("");
  const [eventTimeFrom, setEventTimeFrom] = useState("");
  const [eventTimeTo, setEventTimeTo] = useState("");

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
      setEventsArr(JSON.parse(savedEvents));
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

    setDays(daysArray);
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  

  const getActiveDay = (date) => {
    const day = new Date(year, month, date);
    const dayName = day.toString().split(" ")[0];
    setActiveDay(dayName);
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
    setActiveDay(day);
  };

  const handleTodayButtonClick = () => {
    const currentDate = new Date();
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
    setActiveDay(currentDate.getDate()); // Set active day to the current date
  }; 

  const handleGotoButtonClick = () => {
    const inputDate = document.querySelector(".date-input").value;
    const [inputMonth, inputYear] = inputDate.split("/");
    setMonth(parseInt(inputMonth) - 1);
    setYear(parseInt(inputYear));
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
