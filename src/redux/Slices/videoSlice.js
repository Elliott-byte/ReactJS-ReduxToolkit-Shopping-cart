import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	open: false,
	videoUrl: "",
}

const videoSlice = createSlice({
	name: "video",
	initialState,
	reducers: {
		openVideo(state, action) {
			state.open = true;
			state.videoUrl = action.payload;
		},
		closeVideo(state) {
			state.open = false;
			state.videoUrl = "";
		},
	},
});

export const { openVideo, closeVideo } = videoSlice.actions;
export default videoSlice.reducer;