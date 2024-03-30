import { mapStores } from 'pinia'
import {useAuthStore} from "@/stores/auth.js";
import {useGlobalStore} from "@/stores/global.js";


export default {
    computed: {
        ...mapStores(useAuthStore, useGlobalStore),

        global() {
            return this.globalStore.global
        },
        loggedIn() {
            return !!this.authStore.user;
        },
        user() {
            return this.authStore.user;
        },
        role() {
            return this.authStore.role;
        },
    },
}
