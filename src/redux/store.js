import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slicesContacts';
import { filterReducer } from './slicesFilter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});