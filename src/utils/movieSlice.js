import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        trailers: null,
        nowPlayingMovies: null
    },
    reducers:{
        addTrailer : (state, action)=>{
            state.trailers = action.payload;
        },
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailer} = movieSlice.actions;
export default movieSlice.reducer;