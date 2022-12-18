import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import internal from 'stream';

class masume {
  count: number;
  str: string;
  constructor() {
    this.count = -1;
    this.str = '未';
  }

  push_button(turn: number) {
    if (this.count == -1) {
      this.count = turn;
    }
  }
};

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <div className='inner'>
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
        </div>
        <div className='inner'>
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
        </div>
        <div className='inner'>
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
        </div>
        <div className='inner'>
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
        </div>
        <div className='inner'>
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
          <LikeButton />
        </div>
      </header>
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState(false);
  const [str, setStr] = useState('白');
  const handleClick = () => {
    setCount(!count);
    if (count == true) setStr('黒');
    else setStr('白');
  };
  return (<span className='likeButton' onClick={handleClick}>{str}</span>)
}

export default App;
