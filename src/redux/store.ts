import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {bookReducer} from "./slices/book.slice";
import {authReducer} from "./slices/auth.slice";
import {userReducer} from "./slices/user.slice";

const rootReducer = combineReducers({
    books: bookReducer,
    auth: authReducer,
    user: userReducer,
});
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const setupStore = () => configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }})
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch'];


export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore,
}