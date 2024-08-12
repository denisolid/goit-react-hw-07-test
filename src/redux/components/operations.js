import axios from "axios";
import {
  deleteContact,
  fetchData,
  setErrorStatus,
  setLoadingStatus,
} from "./contactsSlice";

axios.defaults.baseURL = "https://66ba7440fa763ff550fbd213.mockapi.io/";
export const fetchContactsThunk = () => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const response = await axios.get("contact");

    console.log(response.data);
    dispatch(fetchData(response.data));
  } catch (error) {
    dispatch(setErrorStatus(true));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};

export const deleteContactThunk = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    await axios.delete(`contact/${id}`);

    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setErrorStatus(true));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};
