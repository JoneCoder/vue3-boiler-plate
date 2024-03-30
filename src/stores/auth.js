import { defineStore, acceptHMRUpdate } from 'pinia'


let _userInfo = localStorage.getItem('user');
let _role = localStorage.getItem('role');

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(_userInfo) || null,
        role: _role || null,
    }),

    actions: {
        setAuthInfo: function (data) {
            this.user = data.user;
            this.role = data.role;
            let user = JSON.stringify(data.user);
            localStorage.setItem('user', user);
            localStorage.setItem('role', data.role);
        },
        removeAuthInfo: function () {
            this.role = null;
            this.user = null;
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
