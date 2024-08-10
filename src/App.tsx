import React from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  return (
<div className='flex flex-col h-screen'>
    <Header />
  <div className="flex flex-grow items-center justify-center">
    <Counter />
  </div>
</div>
  );
}

export default App;
