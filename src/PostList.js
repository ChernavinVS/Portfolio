import React, { useState } from 'react';

function PostList({ post, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editBody, setEditBody] = useState(post.body);

  // Обработчик сохранения изменений
  const handleSave = () => {
    onUpdate(post.id, editTitle, editBody);
    setIsEditing(false);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      {isEditing ? (
        <>
          {/* Поля редактирования */}
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <br />
          <textarea
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            style={{ width: '100%', height: '80px' }}
          ></textarea>
          <br />
          {/* Кнопки сохранить и отмена */}
          <button onClick={handleSave}>Сохранить</button>
          <button onClick={() => setIsEditing(false)} style={{ marginLeft: '10px' }}>Отмена</button>
        </>
      ) : (
        <>
          {/* Отображение поста */}
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {/* Кнопки редактировать и удалить */}
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
          <button onClick={() => onDelete(post.id)} style={{ marginLeft: '10px' }}>Удалить</button>
        </>
      )}
    </div>
  );
}

export default PostList;