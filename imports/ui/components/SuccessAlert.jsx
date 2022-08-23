import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export const SuccessAlert = ({ message }) => {
	return (
		<Alert severity="success">
			<AlertTitle>Success</AlertTitle>
			This is a success alert — <strong>{message}</strong>
		</Alert>
	);
};
