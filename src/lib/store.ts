import { configureStore } from '@reduxjs/toolkit'

export const createStore = () => {
    return configureStore({
        reducer: {}
    })
}


export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']