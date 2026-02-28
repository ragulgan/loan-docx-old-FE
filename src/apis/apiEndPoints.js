import AxiosInterceptor from './axiosInterceptor';

export const loginAdmin = (credentials) => AxiosInterceptor.post('/auth/login/admin', credentials);

export const userList = (params) => AxiosInterceptor.get('/users', { params });
export const getUserById = (id) => AxiosInterceptor.get(`/users/${id}`);
export const userAdd = (data) => AxiosInterceptor.post('/users', data);
export const userUpdate = (id, data) => AxiosInterceptor.put(`/users/${id}`, data);
export const deleteUser = (id) => AxiosInterceptor.delete(`/users/${id}`);

export const roleList = (params) => AxiosInterceptor.get('/roles', { params });