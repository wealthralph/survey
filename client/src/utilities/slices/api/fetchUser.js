import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchUser = createApi({
  reducerPath: "fetchUser",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "api/current_user",
    }),
  }),
});

export const { useGetCurrentUserQuery } = fetchUser;
