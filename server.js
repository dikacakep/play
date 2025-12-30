import express from 'express';
import path from 'path';

const app = express();

app.get('/ios', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'ios.txt'));
});

app.get('/android', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'android.txt'));
});

app.get('/windows', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'windows.txt'));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
