const express = require('express'); //Импортируем модуль express — фреймворк для создания
                                    //веб-серверов на Node.js
const cors = require('cors');       // Импортируем модуль cors для разрешения запросов с разных 
                                    // доменов (использует разные http)


const app = express(); // создаем приложение экспресс
const PORT = 5000; // указываем порт для работы сервера


let posts = []; // массив для хранения элементов поста
let nextId = 1;// Переменная для автоматического присвоения уникальных ID новым постам


app.use(cors());// Включаем CORS — разрешаем запросы с других доменов/портов

app.use(express.json());// Включаем парсинг JSON-тел запросов (чтобы req.body содержал распарсенные данные)


// Получение всех постов
app.get('/posts', (req, res) => {  // Обработка GET-запроса по пути /posts — возвращает все посты

  res.json(posts);                 // Отправляем клиенту массив постов в формате JSON
});

// Создание нового поста
app.post('/posts', (req, res) => {
  const { title, body } = req.body;
  const newPost = {
    id: nextId++,
    title,
    body
    // createdAt: new Date().toISOString() // указание времени создания поста
  };
  posts.unshift(newPost);
  res.json(newPost);
});

// Обновление поста
app.put('/posts/:id', (req, res) => {  // Обработка PUT-запроса по пути /posts/:id — обновление существующего поста по ID
  const id = parseInt(req.params.id);  // Получаем ID из URL и преобразуем его в число
  const { title, body } = req.body;    // Из тела запроса извлекаем новые значения заголовка и тела поста

  const postIndex = posts.findIndex(p => p.id === id);   // Находим индекс 
                                                         // поста с нужным ID в массиве posts
                                                         // p => p.id === id лямбда функция которая ищет элементы в массиве posts
                                                         // P это текущий элемент массива
                                                         // Если id элемента равно id элемента массива то вернуть true 

  
  // Если пост не найден, возвращаем ошибку 404 с сообщением
  if (postIndex === -1) {   // findIndex возвращает -1 если пост не найден, поэтому сравниваем с этим числом
    return res.status(404).json({ message: 'Пост не найден' });
  }
  
  // Обновляем существующий пост новыми данными, другие элементы не меняются
  posts[postIndex] = { ...posts[postIndex], title, body }; // обновляет элемент под индексом postIndex
  res.json(posts[postIndex]);
});

// Удаление поста
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);    // Получаем ID из пути запроса (URL)
  posts = posts.filter(p => p.id !== id);   // Удаляем из массива пост, у которого ID совпадает с указанным
                                          // Метод filter создает новый массив элементов без того у которого совпали id
  res.json({ message: 'Пост удален' });   // Подтверждение об удалении

});


app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`); // Запуск сервера на порту PORT



  app.get('/', (req, res) => {                  // Говорит о том чтобы отображать HTML страницу с постами
    res.sendFile(__dirname + '/index.html');    // на локал хост 5000. При этом посты можно 
  });                                           // посмотреть на http://localhost:5000/posts
});