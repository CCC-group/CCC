import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("this is the user credentials:", userCredentials);
      const user = userCredentials.user;
      // Return user object as the fulfilled action payload
      return user;
    } catch (error) {
      // Return error message as the rejected action payload
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  email: "",
  password: "",
  isLoggedIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateCredentials(state, action) {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    signInSuccess(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    signInFailure(state, action) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { signInSuccess, signInFailure, signOut } = authSlice.actions;

export default authSlice.reducer;
