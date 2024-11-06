import axios from 'axios';

const API_URL = 'http://localhost:3333/students';

export const getCourses = () => {
  return axios.get(`${API_URL}/students`);
};

export const getCourseDetails = (courseId) => {
  return axios.get(`${API_URL}/students/${courseId}`);
};

export const bookCourse = (courseId, userId) => {
  return axios.post(`${API_URL}/students/${courseId}/book`, { userId });
};

export const recordAttendance = (courseId, userId) => {
  return axios.post(`${API_URL}/attendance`, { courseId, userId });
};

export const getHistory = (userId) => {
  return axios.get(`${API_URL}/history`, { params: { userId } });
};
