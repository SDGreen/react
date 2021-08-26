import {useEffect, useState} from "react"

function EditEvent({event, setErrorMessage, setEventToEdit}) {
    const [editedDate, setEditedDate] = useState("")
    const [editedTitle, setEditedTitle] = useState("")
    const [editedDescription, setEditedDescription] = useState("")

    useEffect(() => {
        console.log(event)
        if (!event) return 
        setEditedDate(event.date)
        setEditedTitle(event.title)
        setEditedDescription(event.description)
    }, [event])

    if (Object.keys(event).length === 0) return ""

    async function updateEvent(){

        const body = {
            id: event._id,
            date: editedDate,
            title: editedTitle,
            description: editedDescription,
        }

        const response = await fetch("http://localhost:5000/edit-entry", {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
        })

        const data = await response.json()

        if (data.status){
            setEventToEdit({})
        } else {
            setErrorMessage(data.message)
        }
        
    }

    return (
    <div>
        <p>Date</p>
        <input onChange={e => setEditedDate(e.target.value)} type="text" defaultValue={event.date}/>
        <p>Title</p>
        <input onChange={e => setEditedTitle(e.target.value)} type="text" defaultValue={event.title} />
        <p>Description</p>
        <input onChange={e => setEditedDescription(e.target.value)} type="text" defaultValue={event.description}/>
        <div>
            <button onClick={updateEvent}>Submit</button>
        </div>
     
    </div>
    );
  }

  export default EditEvent;