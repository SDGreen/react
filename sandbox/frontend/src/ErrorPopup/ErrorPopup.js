import './ErrorPopup.css';

function ErrorPopup({message}) {

    if (!message){
        return ""
    }

    return (
    <div id="error-popup">
        <h1>Error</h1>
        <p>{message}</p>
    </div>
    );
    
  }

  export default ErrorPopup;