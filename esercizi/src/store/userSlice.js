import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        list: [],
        loading: false,
        error: null
    },
    reducers: {
        addUser: (state, action) => {
            state.loading = false;
            state.error = null;
            state.list.push(action.payload)},
        removeUser: (state, action) => {
            state.list = state.list.filter((user)=> user.id !== action.payload.id)
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const fetchUser = (username) => async (dispatch) => {
    dispatch(setLoading(true))
    dispatch(setError(null))
    await new Promise(resolve => setTimeout(resolve, 2000));
    try {
        const data = await fetch(`https://api.github.com/users/${username}`);
        const response = await data.json();
        if (response.message === "Not Found") {
            throw new Error("Utente non trovato");
        }
        
        const user = {
            id: response.id,
            name: response.login
        };

  dispatch(addUser(user));
  dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false))
        dispatch(setError(error.message))
    }
};

export const { addUser, removeUser, setLoading, setError } = userSlice.actions
export default userSlice.reducer
