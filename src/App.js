import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />

      <section className="section-2">
        <h1>Second Section</h1>
      </section>

      <section className="section-3">
        <h1>Third Section</h1>
      </section>
      <hr />
      <section className="section-3">
        <h1>Fourth Section</h1>
      </section>
    </div>
  );
}

export default App;
