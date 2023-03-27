import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// import useUser from ".././features/hooks/UseUser";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkApi) => {
    const jwt = localStorage.getItem('jwt');

    try {
        const response = await axios.get('/contacts', {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export default fetchContacts;

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkApi) => {
        const jwt = localStorage.getItem('jwt');
        try {
            const response = await axios.delete(`/contacts/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            return response.data.id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });

export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, thunkApi) => {
        const jwt = localStorage.getItem('jwt');

        try {
            const response = await axios.post(`/contacts`, contact, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    })