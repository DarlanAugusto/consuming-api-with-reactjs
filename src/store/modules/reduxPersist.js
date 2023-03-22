import storage from 'reduxjs-toolkit-persist/lib/storage';
import { persistReducer } from 'reduxjs-toolkit-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelist: ['exampleReducer'],
    },
    reducers
  );

  return persistedReducers;
};
