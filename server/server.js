const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;



app.use(cors());
app.use(express.json());

// Получение всех постов
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Создание нового поста
app.post('/posts', (req, res) => {
  const { title, body } = req.body;
  const newPost = {
    id: nextId++,
    title,
    body,
    createdAt: new Date().toISOString()
  };
  posts.unshift(newPost);
  res.json(newPost);
});

// Обновление поста
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, body } = req.body;
  const postIndex = posts.findIndex(p => p.id === id);
  
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Пост не найден' });
  }
  
  posts[postIndex] = { ...posts[postIndex], title, body };
  res.json(posts[postIndex]);
});

// Удаление поста
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter(p => p.id !== id);
  res.json({ message: 'Пост удален' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});