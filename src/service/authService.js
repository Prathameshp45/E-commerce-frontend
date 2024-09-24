import axios from "axios";

const authservice = {
    login: async(email, password) => {
        console.log(email, password);
        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', { email, password });
            const token = response.data.token;
            console.log(token);
            localStorage.setItem('token', token);
            return token;
        }catch(err) {
            console.log('login failed', err);
            throw err;
        }

    },

    getUser: async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) return null;
        try {
            const response = await axios.get('http://localhost:4000/api/auth/getUserInfo', { 
                headers: { Authorization: `Bearer ${token}` } });
            return response.data.user;
        }catch(err) {
            console.log('failed to get user', err);
            localStorage.removeItem('token');
            return null;
        }
    },
    logout: () => {
        localStorage.removeItem('token');
    }
}
export default authservice;