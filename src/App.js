import "./components/css/App.css";
import Notes from "./components/NoteComponents/Notes";
import Headers from "./components/NoteComponents/Header";

function App() {
  return (
    <div className="main">
      <Headers />
      <Notes />
    </div>
  );
}

export default App;
