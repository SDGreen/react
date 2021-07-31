import './CalendarEntry.css';

function CalendarEntry({date, eventName, eventDescription}) {
    return (
    <div>
        <h1>{date}</h1>
        <p>{eventName}</p>
        <p>{eventDescription}</p>
    </div>
    );
  }

  export default CalendarEntry;