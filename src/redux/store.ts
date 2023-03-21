import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import appApi from "./appApi"
import { rtkErrorLogger } from './middlewares'


const reducers = combineReducers({
    [appApi.reducerPath]: appApi.reducer,
})


export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        })
            .concat(appApi.middleware)
            .concat(rtkErrorLogger)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>