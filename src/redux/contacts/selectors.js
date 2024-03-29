import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter.filter;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (users, filter) => {
    return filter
      ? users.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      : users;
  }
);