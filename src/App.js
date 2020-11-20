import {initNotification} from "./Services/firebaseService"
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
