import axios from 'axios';

const apiClient = axios.create({
    baseURL: `http://localhost:3030`,
    withCredentials: false, // this is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getProposals() {
        return apiClient.get('/proposals')
    },
    doPost(url, data) {
        return apiClient.post(url,data)
    },

    doLogout( user) {
        apiClient.post('/logout', user)
        console.log("DOING LOGOUT");
        console.log("REFRESHED?");
            localStorage.removeItem('user');
            location.reload();
        return true;
    },

    getComments() {
        return apiClient.get('/comments/');
    },
    getUserComments(userId) {
        return apiClient.get('/comments/?userId=' + userId)
    },
    checkUserLogin() {
        
        if(localStorage.getItem("user")) return true;
        
        return false;
    }

}