import React, { useState, useEffect } from 'react';
import './App.css';
import Preview from './components/Preview';

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  
  const addNoteHandler = () => {
    setCreating(true);
  }

  return (
    <Preview>{creating ? getAddNote() : getPreview()}</Preview>
  );
}
export default App;


