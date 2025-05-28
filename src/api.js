import axios from 'axios';

const API_URL = "https://localhost:5000/projects";

// Получение всех постов
export const getProject = () => axios.get(API_URL);

// Создание поста
export const createProject = (projects) => axios.post(API_URL, projects);

// Обновление поста
export const updateProject = (id, updateProject) => axios.put(`${API_URL}/${id}`, updateProject);

// Удаление поста`
export const deleteProject = (id) => axios.delete(`${API_URL}/${id}`);