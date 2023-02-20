export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.filter.value;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;