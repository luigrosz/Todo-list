import Todo from './pages/List';
import Create from './pages/Create'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './pages/Update';
import { IdContext } from './contexts/IdContext';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [id, setId] = useState(null);
  return (
    <IdContext.Provider value={{ id, setId }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="add" element={<Create />} />
          <Route path="update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </IdContext.Provider>
  )
}