import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const url = process.env.REACT_APP_API_URL + '/user';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    // GET-получить всех пользователей
    allUsers: builder.query({
      query: () => ({
        url: '/all',
        method: 'GET',
      }),
    }),

		//GET-получить пользователя по id
		getUserById: builder.query({
			query: (id) => ({
				url: `/${id}`,
				method: 'GET',
			})
		}),

    // POST-Создать пользователя
    authUser: builder.mutation({
      query: (tgId) => ({
        url: '/auth',
        method: 'POST',
        body: {tgId},
      }),
    }),

		//POST-добавить device пользователю
		addDeviceUser: builder.mutation({
			query: ({userId, deviceId}) => ({
				url: '/addDevice',
				method: 'POST',
				body: {userId, deviceId},
			})
		}),

		//POST-удалить device пользователю
		removeDeviceUser: builder.mutation({
			query: ({userId, deviceId}) => ({
				url: '/removeDevice',
				method: 'POST',
				body: {userId, deviceId},
			})
		})
  }),
});

export const {
	useAuthUserMutation,
	useAllUsersQuery,
	useAddDeviceUserMutation,
	useRemoveDeviceUserMutation,
	useGetUserByIdQuery
} = userApi;