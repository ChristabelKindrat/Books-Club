import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {bookReducer} from "./slices/book.slice";
import {authReducer} from "./slices/auth.slice";
import {userReducer} from "./slices/user.slice";

const rootReducer = combineReducers({
    books: bookReducer,
    auth: authReducer,
    user: userReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer,
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
    setupStore
}