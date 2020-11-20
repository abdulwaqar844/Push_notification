import {initNotification} from "./Services/firebaseService";
import "./App.css"
function App() {
  return (
    <div className="App">
      <h2>Hello Pakistan</h2>
      <button onClick={initNotification}>
        Confiure Notification
        </button>
    </div>
  );
}

export default App;
