import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_REACT_APP_SERVER;

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
      console.log(response.data.clientData);
      return response.data.clientData;
    } catch (error) {
      throw error; // Throw the error instead of using rejectWithValue
    }
  }
);
// Async thunk for updating a client
// export const updateClient = createAsyncThunk(
//   "clients/updateClient",
//   async (client, { rejectWithValue, getState }) => {
//     try {
//       const { idToken } = getState().auth.user; // Get user ID token from state
//       await axios.put(`${url}/api/messages/${client.id}`, {
//         headers: {
//           Authorization: `Bearer ${idToken}` // Include ID token in the request headers
//         }
//       });
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
