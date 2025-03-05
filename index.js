const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// MongoDB connection (use Replit's built-in DB or a free MongoDB Atlas cluster)
mongoose.connect('mongodb+srv://ikezahuemma:<U2uAY1f8otSXdhSV>@cluster0.yxrgr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0>')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple route
app.get('/', (req, res) => res.send('Project Management API'));

// Socket.IO for real-time
io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('disconnect', () => console.log('User disconnected'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));