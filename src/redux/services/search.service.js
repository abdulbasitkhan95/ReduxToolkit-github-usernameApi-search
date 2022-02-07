import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from "../../global/vars";

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Search'],
    endpoints: (builder) => ({
        getSearch: builder.query({
            query: ({searchData='',page=1,count=5}) => `search/users?q=${searchData} in:login&page=${page}&per_page=${count}`,
            providesTags: ['Search']
        })
    })
})

export const { useGetSearchQuery } = searchApi