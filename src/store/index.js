import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/user.api';
import { subscriptionsApi } from './api/subscription.api';
import { itemApi } from './api/item.api';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [subscriptionsApi.reducerPath]: subscriptionsApi.reducer,
		[itemApi.reducerPath]: itemApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(subscriptionsApi.middleware)
			.concat(itemApi.middleware)
});