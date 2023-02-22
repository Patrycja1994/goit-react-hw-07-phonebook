import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63f37142fe3b595e2ee1e33d.mockapi.io/contacts/";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts")
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
}
});

export const addNewContact = createAsyncThunk("contacts/addContacts", async (text, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", text)
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
}
});

export const deleteContact = createAsyncThunk("contacts/deleteContacts", async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`)
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
}
});