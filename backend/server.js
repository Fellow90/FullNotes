const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let notes = [];

// Get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Create a new note
app.post('/api/notes', (req, res) => {
  const { content } = req.body;
  const newNote = { id: Date.now().toString(), content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
