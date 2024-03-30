import { defineStore, acceptHMRUpdate } from 'pinia'

export const useGlobalStore = defineStore({
    id: 'global',
    state: () => ({
        global: {},
    }),

    actions: {
        setGlobalData(data) {
            this.global = data.global;
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
