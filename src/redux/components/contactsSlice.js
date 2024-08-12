import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], isLoding: false, isError: false };
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrorStatus: (state, action) => {
      state.isError = action.payload;
    },
    fetchData: (state, action) => {
      state.items = action.payload;
    },
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.id != payload);
    },
  },
});

export const {
  addContact,
  deleteContact,
  setLoadingStatus,
  setErrorStatus,
  fetchData,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
