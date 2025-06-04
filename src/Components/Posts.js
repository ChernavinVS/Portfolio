// Отображение списка постов полученных с сервера
import React, { useState, useEffect } from 'react'; // State состояние компонента
                                                    // Effect хук состояния например загрузки
import axios from 'axios';

function Posts({ onPostChange }) {                  //  Posts принимает пропс onPostChange при изменения поста
  const [posts, setPosts] = useState([]);           // массив постов пустой изначально
  const [loading, setLoading] = useState(true);     // true показывает индикатор загрузки при первой загрузки постов

  const loadPosts = async () => {   // асинхронная функция загрузки постов try cath finaly
    try {
      setLoading(true);  // показываем индикатор загрузки
      const response = await axios.get('http://localhost:5000/posts'); // гет запрос о количестве постов
                                                                       //  и сохраняем в респонс
      setPosts(response.data); // сохраняем респонс в состояние сетпостс
                               // data это основной ответ который сервер прислал
    } catch (err) {
      console.error('Ошибка загрузки постов:', err); // если ошибка выводим в консоль
    } finally {
      setLoading(false);  // скрыть индикатор загрузки независимо от результата выполнения
    }
  };

  useEffect(() => {
    loadPosts();
  }, []); // массив пустой, загрузка выполняется сразу при монтировании компонета
          // useEffect появляется сразу как только вызывается LoadPosts

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      loadPosts(); // обновляем список после удаления
      onPostChange?.(); // вызываем пропс который покажет список постов после удаления поста
    } catch (err) {
      console.error('Ошибка удаления:', err); // если ошибка то показать сообщение
    }
  };
// Редактирование поста
// В асинхронную функцию через промт это диалоговое окно, передается post для редактирования
// если новый заголовок и пост отличаются от старых имен и текста поста то применить изменения
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
    loadPosts(); // показать индикатор загрузки
    onPostChange?.();  // пропс с перечнем постов после редактирования
  } catch (err) {
    console.error('Ошибка редактирования:', err);
  }
};

  if (loading) return <p>Загрузка постов...</p>;
  if (posts.length === 0) return <p>Нет постов для отображения</p>;//posts.length JS проверка массива posts

  return (
    <div style={{ maxWidth: 'auto', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'start', marginBottom: '20px' , marginLeft :'10px'}}>Список постов</h2>
      {posts.map(post => (//создает новый массив posts из элементов массива post, key как идентификатор каждого поста по id
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