import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export const ErrorAlert = ({ message }) => {
	return (
		<Alert severity="error">
			<AlertTitle>Error</AlertTitle>
			This is an error alert — <strong>{message}</strong>
		</Alert>
	);
};
