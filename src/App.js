import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"; 
import './App.css';

function App() {
  
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");
};
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Tytul: ${tytul}, Rodzaj: ${rodzaj}');

  return (
    <h1>Dodaj film</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor='tytul'>Tytuł filmu:</label>
    <input
      type="text"
      id="tytul"
      className="form-control"
      value={tytul}
      onChange={(e) => setTytul(e.targer.value)}
      />
      </div>

      <div className="form-group">
        <label htmlFor="rodzaj">Rodzaj filmu:</label>
        <select
        id="rodzaj"
        className="form-control"
        value={rodzaj}
      
      ></select></div>
      </form>
    );

  };
export default App;
