// src/components/VideoStreamModal.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog } from "@mui/material";
import ReactPlayer from "react-player";
import { closeVideo } from "../redux/Slices/videoSlice";

const VideoStreamModal = () => {
	const dispatch = useDispatch();
	const { open, videoUrl } = useSelector((state) => state.video);

	const handleClose = () => {
		dispatch(closeVideo());
	};

	return (
		<Dialog open={open} onClose={handleClose} PaperProps={{
			style: {
				width: '700px', // Custom width between sm (600px) and md (900px)
				maxWidth: '95%' // Responsive on smaller screens
			}
		}}>
			<div className="p-7">
				<ReactPlayer url={videoUrl} controls playing />
			</div>
		</Dialog>
	);
};

export default VideoStreamModal;