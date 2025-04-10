import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const url = process.env.REACT_APP_API_URL + '/item';

export const itemApi = createApi({
	reducerPath: 'itemApi',
	baseQuery: fetchBaseQuery({
		baseUrl: url,
	}),
	endpoints: (builder) => ({

		//POST-Создать item
		//ДОПИЛИТЬ С IMG ?
		createItem: builder.mutation({
			query: (data) => ({
				url: '/create',
				method: 'POST',
				body: data
			})
		}),

		//GET-Получить все item
		allItems: builder.query({
			query: (data) => ({
				url: '/all',
				method: 'GET',
				body: data, //deviceId, subscriptionId, limit, page
			})
		}),

		//GET-Получить Item по id
		getItemById: builder.query({
			query: (itemId) => ({
				url: `/${itemId}`,
				method: 'GET',
			})
		}),

		//PUT-Изменить Item по id
		editItemById: builder.mutation({
			query: ({itemId, data}) => ({
				url: `/${itemId}`,
				method: 'PUT',
				body: data,
			})
		}),

		//DELETE - Удалить Item по id
		deleteItemById: builder.mutation({
			query: (itemId) => ({
				url: `/${itemId}`,
				method: 'DELETE',
			})
		})
	}),
});
export const {
	useCreateItemMutation,
	useAllItemsQuery,
	useGetItemByIdQuery,
	useEditItemByIdMutation,
	useDeleteItemByIdMutation,
} = itemApi