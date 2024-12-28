import { configureStore } from "@reduxjs/toolkit";
import careersReducer from "./../slice/careers/careersSlice";
import contactsReducer from "./../slice/contacts/contactsSlice";
import usersReducer from "./../slice/users/usersSlice";

const store = configureStore({
  reducer: {
    careers: careersReducer,
    contacts: contactsReducer,
    users: usersReducer
  },
});

export default store;
