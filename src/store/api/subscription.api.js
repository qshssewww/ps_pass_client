import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const url = process.env.REACT_APP_API_URL + '/subscription';

export const subscriptionsApi = createApi({
	reducerPath: 'subscriptionsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: url,
	}),
	endpoints: (builder) => ({
		//POST-создать подписку
		createSubscription: builder.mutation({
			query: (title) => ({
				url: '/create',
				method: 'POST',
				body: {title},
			}),
		}),

		//GET-получить подписку по id
		getSubscriptionById: builder.query({
			query: (id) => ({
				url: `/${id}`,
				method: 'GET',
			})
		}),

		//GET-получить все подписки
		allSubscriptions: builder.query({
			query: () => ({
				url: '/all',
				method: 'GET',
			})
		}),

		//DELETE-удалить подписку по id
		deleteSubscriptionById: builder.mutation({
			query: (id) => ({
				url: `/${id}`,
				method: 'DELETE',
			})
		})
	}),
});
export const {
	useCreateSubscriptionMutation,
	useGetSubscriptionByIdQuery,
	useAllSubscriptionsQuery,
	useDeleteSubscriptionByIdMutation
} = subscriptionsApi