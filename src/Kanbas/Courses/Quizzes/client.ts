import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const api = axios.create({
    withCredentials: true
});
const COURSES_API = `${API_BASE}/api/courses`;
const QUIZZES_API = `${API_BASE}/api/quizzes`;

export const createQuiz = async (courseId : string, quiz : any) => {
    const response = await api.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
    console.log("response from createQuiz", response.data);
    return response.data;
};
export const deleteQuiz = async (id : string) => {
    const response = await api.delete(`${QUIZZES_API}/${id}`);
    return response.data;
};
export const updateQuiz = async (quiz : any) => {
    const response = await api.put(`${QUIZZES_API}/${quiz.id}`, quiz);
    return response.data;
};
export const findQuizzesForCourse = async (courseId : string) => {
    const response = await api.get(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
};
export const findQuizById = async (quizId:String) => {
    const response = await api.get(`${QUIZZES_API}/${quizId}`);
    return response.data;
}
