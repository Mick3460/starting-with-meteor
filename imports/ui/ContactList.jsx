import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";
import {
	Avatar,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	ImageIcon,
} from "@mui/material";

export const ContactList = (props) => {
	const contacts = useTracker(() => {
		return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch();
	});

	const removeContactHandler = (e,_id) => {
		e.preventDefault()
		Meteor.call("contacts.remove", { contactId: _id });
		console.log("DELETE???", _id);
	};
	return (
		<>
			<h3>Contact List</h3>
			<ul>
				{contacts.map((contact) => (
					<li key={contact._id}>
						<Avatar alt="picture here" src={contact.imageUrl} />
						<Typography varient="h5">{contact.name} - </Typography>
						<Typography varient="h5">{contact.email}</Typography>
						<div>
							<a onClick={(e) => removeContactHandler(e,contact._id)}>
								Remove id: {contact._id}
							</a>
						</div>
					</li>
				))}
			</ul>
			{/*             
			<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Photos" secondary="Jan 9, 2014" />
				</ListItem>
			</List> */}
		</>
	);
};
