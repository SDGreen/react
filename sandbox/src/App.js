import logo from './logo.svg';
import './App.css';
import CalendarEntry from './CalendarEntry/CalendarEntry.js';
import CreateEvent from './CreateEvent/CreateEvent';
import {useState} from "react"

function App() {
  const [date, setDate] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [events, setEvents] = useState([])

  function addEvent() {
    const newEvent = {
      date: date,
      title: title,
      description: description
    }

    setEvents([...events, newEvent])

    setDate("")
    setTitle("")
    setDescription("")

  }

  return (
    <div className="App">
      <div id="newDiv">
          <h3>Calendar</h3>
          {events.map((event) => {
            return( 
              <CalendarEntry 
                date={event.date} 
                eventName={event.title} 
                eventDescription={event.description}
              />
            )
          })}

          <CreateEvent 
            date={date} 
            setDate={setDate} 
            title={title} 
            setTitle={setTitle} 
            description={description} 
            setDescription={setDescription}
          />

          <button onClick={addEvent}>New Event</button>
      </div>
    </div>
  );
}

export default App;
