import './App.css';
import { Fragment } from 'react';
import Test from './component';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Test/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
