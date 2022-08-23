import React, { useState } from "react";
import { FormLabel } from "@mui/material";
import { Meteor } from "meteor/meteor";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { ErrorAlert } from "./components/ErrorAlert";
import { SuccessAlert } from "./components/SuccessAlert";

export const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [success, setSuccess] = useState("");

	const showError = (message) => {
		setErrorMsg(message);
		console.log(errorMsg, "i showerror");
		setTimeout(() => {
			setErrorMsg("");
		}, 2000);
	};

	const showSuccess = () => {
		setSuccess("Contact saved");
		setTimeout(() => {
			setSuccess("");
		}, 2000);
	};
	function saveContact() {
		Meteor.call(
			"contacts.insert",
			{ name, email, imageUrl },
			(errorResponse) => {
				if (errorResponse) {
					showError(errorResponse.error);
					console.log(errorResponse.error, "I formen");
				} else {
					setName("");
					setEmail("");
					setImageUrl("");
					showSuccess();
				}
			}
		);
	}

	return (
		<form>
			{errorMsg && <ErrorAlert message={errorMsg} />}
			{success && <SuccessAlert message={success} />}
			<div>
				<FormLabel color="primary">Test</FormLabel>
				<label htmlFor="name">Name</label>
				<input
					value={name}
					id="name"
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					value={email}
					id="email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="imageUrl">ImageUrl</label>
				<input
					value={imageUrl}
					type="text"
					id="imageUrl"
					onChange={(e) => setImageUrl(e.target.value)}
				/>
			</div>
			<div>
				<button type="button" onClick={saveContact}>
					Save Contact
				</button>
			</div>
		</form>
	);
};
