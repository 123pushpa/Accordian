import React, { useState } from 'react';
import { mainData, subData } from './data.js';
import './App.css';

export default function App() {
  const [activeField, setActiveField] = useState(null);

  function handleClick(id) {
    console.log(id);
    setActiveField(activeField === id ? null : id);
  }

  return (
    <>
      <h2>ACCORDIAN</h2>

      {mainData.map((el, id) => (
        <div className="accordian_container" key={id}>
          <h2> {el}</h2>
          <button onClick={() => handleClick(id)}>
            {activeField === id ? '-' : '+'}
          </button>
          {activeField === id && <p>{subData[id]}</p>}
        </div>
      ))}
    </>
  );
}
