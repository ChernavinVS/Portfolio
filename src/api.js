import axios from 'axios';
// import Posts from './Components/Posts';

const API_URL = "https://localhost:5000/posts";

// Получение всех постов
export const getPosts = () => axios.get(API_URL);

// Создание поста
export const createPosts = (Posts) => axios.post(API_URL, Posts);

// Обновление поста
export const updatePosts = (id, updatePosts) => axios.put(`${API_URL}/${id}`, updatePosts);

// Удаление поста`
export const deletePosts = (id) => axios.delete(`${API_URL}/${id}`);