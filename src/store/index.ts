import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./moudles/user"
import publicReducer from "./moudles/public"

const persistedState = localStorage.getItem('root')
    ? JSON.parse(localStorage.getItem('root') || '{}')
    : {};

export const store = configureStore({
    reducer: {
        user:userReducer,
        public:publicReducer
    },
    preloadedState: persistedState,
})



store.subscribe(() => {
    localStorage.setItem('root', JSON.stringify(store.getState()));
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch