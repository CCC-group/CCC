import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const deleteClient = createAsyncThunk(
  "clients/deleteClient",
  async (clientId, { rejectWithValue, getState }) => {
    try {
      const { idToken } = getState().auth.user;
      await axios.delete(`${url}/api/messages/${clientId}`, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      return clientId; // Return the clientId if deletion is successful
    } catch (error) {
      throw error; // Throw the error instead of using rejectWithValue
    }
  }
);

export const getClients = createAsyncThunk(
  "clients/getClients",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { idToken } = getState().auth.user;
      const response = await axios.get(`${url}/api/messages`, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      return response.data.clientData;
    } catch (error) {
      throw error; // Throw the error instead of using rejectWithValue
    }
  }
);

const initialState = {
  clients: [],
  status: null,
  error: null,
};

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    // Add reducers for other CRUD operations like addClient, updateClient, deleteClient
    addClients(state, action) {
      state.clients = [...action.payload];
      state.error = null;
    },
    removeClient(state, action) {
      state.clients = [...action.payload];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Add a matcher for any action type that ends with "/pending"
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        state.status = "loading";
      }
    );

    // Add a matcher for any action type that ends with "/fulfilled"
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        state.status = "succeeded";
        state.clients = action.payload;
      }
    );

    // Add a matcher for any action type that ends with "/rejected"
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }
    );
  },
});

export default clientSlice.reducer;
