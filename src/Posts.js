
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts({ onPostChange }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/posts');
      setPosts(response.data);
    } catch (err) {
      console.error('Ошибка загрузки постов:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      loadPosts();
      onPostChange?.();
    } catch (err) {
      console.error('Ошибка удаления:', err);
    }
  };

  const handleEdit = async (post) => {
  const newTitle = prompt('Редактировать заголовок', post.title);
  if (newTitle === null) return;
  
  const newBody = prompt('Редактировать текст', post.body);
  if (newBody === null) return;
  
  try {
    await axios.put(`http://localhost:5000/posts/${post.id}`, {
      ...post,         // Копируем все существующие поля поста
      title: newTitle, // Обновляем заголовок
      body: newBody    // Обновляем содержимое
    });
    loadPosts();
    onPostChange?.();
  } catch (err) {
    console.error('Ошибка редактирования:', err);
  }
};

  if (loading) return <p>Загрузка постов...</p>;
  if (posts.length === 0) return <p>Нет постов для отображения</p>;

  return (
    <div style={{ maxWidth: 'auto', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'start', marginBottom: '20px' , marginLeft :'10px'}}>Список постов</h2>
      {posts.map(post => (
        <div 
          key={post.id}
          style={{
            border: '1px solid #ddd',
            
            padding: '15px',
            marginBottom: '15px',
            
          }}
        >
          <h3 style={{ margin: '0 0 10px 0' }}>{post.title}</h3>
          <p style={{ margin: '10px 0' }}>{post.body}</p>
          <div>
            <button 
              onClick={() => handleEdit(post)}
              style={{
                marginLeft: '10px'}}
            >
              Редактировать
            </button>
            <button 
              onClick={() => handleDelete(post.id)}
            style={{
                marginLeft: '10px'}}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;