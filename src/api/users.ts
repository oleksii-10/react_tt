import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Repository } from '../types/repository';
import type { User } from '../types/users';

const GH_TOKEN = process.env.REACT_APP_GH_TOKEN;

type Response<T> = T[] | {
  items: T[];
};

type GetRepositoryArgs = {
  userName: string;
  searchValue: string;
};

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',

    prepareHeaders: (headers) => {
      if (GH_TOKEN) {
        headers.set('Authorization', `Token ${GH_TOKEN}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getUsers: build.query<User[], string>({
      query: (searchValue) => {
        const requestData = { url: '/users' };

        if (searchValue) {
          Object.assign(requestData, {
            url: '/search/users',
            params: {
              q: searchValue
            },
          });
        };

        return requestData;
      },
      transformResponse: (response: Response<User>) => {
        if (Array.isArray(response)) {
          return response;
        }

        return response.items || [];
      },
    }),

    getOneUser: build.query<User, string>({
      query: username => ({
        url: `/users/${username}`,
        params: {
          subject_type: 'repository'
        },
      }),
      transformResponse: (response: User) => {
        return response || {};
      },
    }),

    getRepositories: build.query<Repository[], GetRepositoryArgs>({
      query: ({ searchValue, userName }) => {
        const requestData = {
          url: `/search/repositories`,
          params: {
            q: `user:${userName}`,
          },
        };

        if (searchValue) {
          requestData.params.q = `${searchValue} ${requestData.params.q}`;
        }

        return requestData;
      },
      transformResponse: (response: Response<Repository>) => {
        if (Array.isArray(response)) {
          return response;
        }

        return response.items || [];
      },
    }),
  }),
});

export default usersApi;
