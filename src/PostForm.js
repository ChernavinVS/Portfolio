import React, { useState } from 'react';
import axios from 'axios';

function PostForm({ onPostAdded }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      axios.post('http://localhost:5000/posts', { title, body })
        .then(() => {
          setTitle('');
          setBody('');
          onPostAdded();
        })
        .catch(err => console.error('Ошибка добавления поста:', err));
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