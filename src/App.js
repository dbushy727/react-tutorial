import React from 'react';
import './App.css';
import Title from './components/Title';
import Content from './Content';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <Title />
      <Content />
      <Paragraph />

      <section className="section-2">
        <h1>Second Section</h1>
      </section>

      <section className="section-3">
        <h1>Third Section</h1>
      </section>
    </div>
  );
}

export default App;
