import axios from "axios";
import contactsActions from "./phonebook-actions";

// axios.defaults.baseURL = "http://connections-api.herokuapp.com";

const addContact =
  ({ name, number }) =>
  (dispatch, getState) => {
    const contact = { name, number };
    const contacts = getState().contacts.contacts;

    if (contacts?.some((contact) => contact.name === name)) {
      return dispatch(
        contactsActions.addContactError(`${name} is alredy exist`)
      );
    }
    dispatch(contactsActions.addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
      .catch((error) => dispatch(contactsActions.addContactError(error)));
  };

const deleteContact = (contactId) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(contactsActions.deleteContactError(error)));
};

const getContact = () => (dispatch) => {
  dispatch(contactsActions.getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.getContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.getContactsError(error)));
};

// const clearContactList = () => dispatch=> {

// }

const contactsOperations = { getContact, addContact, deleteContact };
export default contactsOperations;
