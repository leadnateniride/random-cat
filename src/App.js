import './App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {
  const defaulttext = "A Random Cat Fact";
  const [text, setText] = useState(defaulttext);

  function query() {
    return fetch('https://catfact.ninja/fact')
    .then((response) => response.json())
    .then((responseJson) => {
      const text = responseJson.fact;
      setText(text);
    })
    .catch((error) => console.error(error));
  }

  function BtnClick(){
    query()
  }

  function QueryBtn(){
    return (
      <Button variant="outlined" onClick={BtnClick}>
          {/* Click 🐱 */}
          🐱
      </Button>
    )
  }

  function QueryText(){
    return (
      <Box sx={{
        width: 600,
        height: 300,
      }}
      >
        <p>{text}</p>
      </Box>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <QueryText/>
        <QueryBtn/>
      </header>
    </div>
  );
}

export default App;
