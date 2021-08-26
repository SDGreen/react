import './CalendarEntry.css';
import {FaPencilAlt} from "react-icons/fa"

function CalendarEntry({event, setEventToEdit}) {
    return (
    <div className="entry">
    <div>
        <h1>{event.date}</h1>
        <p>{event.name}</p>
        <p>{event.description}</p>
    </div>
    <FaPencilAlt id="edit-button" onClick={() => setEventToEdit(event)}/>
    </div>
    );
  }

  export default CalendarEntry;