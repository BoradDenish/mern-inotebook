import express from 'express';
import connectToMongo from './db.js';

// Import routes using ES module syntax
import authRoutes from './routes/auth.js';
import notesRoutes from './routes/notes.js';

connectToMongo();
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use imported routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
