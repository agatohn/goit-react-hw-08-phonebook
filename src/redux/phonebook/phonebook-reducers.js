import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./phonebook-actions";
import { authOperations } from "../authorization";

const contacts = createReducer([], {
  [contactsActions.getContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.addContactError]: (_, { payload }) => alert(payload),
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [authOperations.logOut.fulfilled]: () => [],
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactsActions.getContactsRequest]: () => true,
  [contactsActions.getContactsSuccess]: () => false,
  [contactsActions.getContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.getContactsError]: (_, { payload }) => payload,
  [contactsActions.addContactError]: (_, { payload }) => payload,
  [contactsActions.deleteContactError]: (_, { payload }) => payload,
  [contactsActions.getContactsSuccess]: () => null,
  [contactsActions.addContactSuccess]: () => null,
  [contactsActions.deleteContactSuccess]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
