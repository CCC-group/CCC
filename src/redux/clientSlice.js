import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_REACT_APP_SERVER;

export const deleteClient = createAsyncThunk(
  "clients/deleteClient",
  async (clientId, { rejectWithValue }) => {
    try {
      await axios.delete(`${url}/api/messages/${clientId}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for getting all clients
export const getClients = createAsyncThunk(
  "clients/getClients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/api/messages`);
      return response.data.clientData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for updating a client
export const updateClient = createAsyncThunk(
  "clients/updateClient",
  async (client, { rejectWithValue }) => {
    try {
      await axios.put(`${url}/api/messages/${client.id}`, client);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const clientSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // Add reducers for other CRUD operations like addClient, updateClient, deleteClient
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
        // Assuming the payload contains the updated client data
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
