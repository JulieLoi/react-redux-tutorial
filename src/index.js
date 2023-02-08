import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import {
    persistStore, persistReducer,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import userReducer from './features/user';
import themeReducer from './features/theme';

// Redux Persists Store (saving state to local state)
const persistConfig = { key: "react-redux-tutorial", storage: storage, version: 1 };

// Combines Reducers
const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Store (Persists)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

/*
const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
});*/


const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <App />
        </PersistGate>
    </Provider>
);

