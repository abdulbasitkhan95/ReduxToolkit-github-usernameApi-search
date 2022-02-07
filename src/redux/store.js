import { searchApi } from "./services/search.service";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            searchApi.middleware
        )
})
