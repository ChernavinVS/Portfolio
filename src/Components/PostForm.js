import React, { useState } from 'react';  // useState текущее состояние компонента PostForm
import axios from 'axios';

function PostForm({ onPostAdded }) {      //Компонент
                                          //PostForm, который принимает пропс onPostAdded
  const [title, setTitle] = useState(''); //setTitle присвает заголовку состояние
                                          //useState как пустую строку
  const [body, setBody] = useState('');   //то же самое для текста поста

  const handleSubmit = (e) => {
    e.preventDefault();                   //Предотвращает перезагрузку страницы при событии event
    if (title.trim() && body.trim()) {    // убирает пробелы. 
      axios.post('http://localhost:5000/posts', { title, body })
        .then(() => {                      // Если запрос успешный то очищаем заголовок и пост
          setTitle('');                    // чтобы при добавлении нового поста  
          setBody('');                     // заголовок и пост были пустые строки
          onPostAdded();                   //вызываем пропс для обновления списка в компоненте PostForm
         })
        .catch(err => console.error('Ошибка добавления поста:', err)); // если запрос не выполнился
                                                                       //выводится на консоль сообщение и данные ошибки
    }
  };

  return (    
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ textAlign: 'start', marginBottom: '20px' , marginLeft :'10px'}}>Добавить пост</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: 'auto', marginBottom: '5px' }}
        />
        <br />
        <textarea
          placeholder="Текст"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          style={{ width: '100%', height: '80px', marginBottom: '20px'}}
        />
        <br />
        <button type="submit">Добавить пост</button>
      </form>
    </div>
  );
}

export default PostForm;