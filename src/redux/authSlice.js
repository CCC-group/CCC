import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";



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
      const user = userCredentials.user;
      // Return user object as the fulfilled action payload
      const token = await auth.currentUser.getIdToken()
      const action = { payload: {idToken: token, email:user.email}};
      console.log(action);
      return action;
    } catch (error) {
      // Return error message as the rejected action payload
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
      logOut(state) {
      const auth = getAuth();
      signOut(auth);
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const {updateCredentials, signInSuccess, signInFailure, logOut } = authSlice.actions;

export default authSlice.reducer;
