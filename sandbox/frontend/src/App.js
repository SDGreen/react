import logo from './logo.svg';
import './App.css';
import CalendarEntry from './CalendarEntry/CalendarEntry.js';
import CreateEvent from './CreateEvent/CreateEvent';
import {useState, useEffect} from "react"
import ErrorPopup from './ErrorPopup/ErrorPopup';
import EditEvent from './EditEvent/EditEvent';

function App() {
  const [date, setDate] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [events, setEvents] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [eventToEdit, setEventToEdit] = useState({})

  useEffect(() => {
    fetch("http://localhost:5000/get-entries").then(response => {
      response.json().then(data => {

        if (data.status){
          setEvents(data.message)
        } else {
          setErrorMessage(data.message)
        }

      })
    })
  }, [])
  
  async function addEvent() {
    const newEvent = {
      date: date,
      title: title,
      description: description
    }
    
    const response = await fetch("http://localhost:5000/new-entry", {
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const data = await response.json()

    if (data.status){
      setEvents([...events, newEvent])
      setDate("")
      setTitle("")
      setDescription("")
      setErrorMessage("")
    } else {
      setErrorMessage(data.message)
    }


   
  }

  return (
    <div className="App">
      <ErrorPopup message={errorMessage}/>
      <div id="newDiv">
        <EditEvent event={eventToEdit} setErrorMessage={setErrorMessage} setEventToEdit={setEventToEdit}/>
          <h3>Calendar</h3>
          {events.map((event) => {
            return( 
              <CalendarEntry
                event={event}
                setEventToEdit={setEventToEdit}
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
