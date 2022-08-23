
import { PhotoCamera } from "@mui/icons-material";
import {
	Typography,
	AppBar,
	Card,
	CardAction,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
	Button,
} from "@mui/material";
import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Header } from "./Header";

export const App = () => {
	return (
		<>
			<CssBaseline />
      <Header />
			<Typography variant="h2">You underestimate my power</Typography>

			<main>
				<div>
          <Container maxWidth="sm">
					  <ContactForm />
          </Container>

          <Container maxWidth="sm">
					  <ContactList />
          </Container>
				</div>
			</main>
		</>
	);
};
