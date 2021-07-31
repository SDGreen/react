
function CreateEvent({date, setDate, title, setTitle, description, setDescription}) {
    return (
    <div>
        <p>Date</p>
        <input onChange={e => setDate(e.target.value)} type="text" value={date}/>
        <p>Title</p>
        <input onChange={e => setTitle(e.target.value)} type="text" value={title}/>
        <p>Description</p>
        <input onChange={e => setDescription(e.target.value)} type="text" value={description}/>
    </div>
    );
  }

  export default CreateEvent;