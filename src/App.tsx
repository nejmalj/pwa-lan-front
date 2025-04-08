import "./App.scss";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app-wrapper">
      <div className="top-background" />
      <div className="content">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
