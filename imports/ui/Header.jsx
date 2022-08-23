import React from "react";
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
import { PhotoCamera } from "@mui/icons-material";

export const Header = () => {
    return (
        <AppBar position="relative">
				<Toolbar>
					<PhotoCamera /> {/*Ikon */}
					<Typography variant="h6">It's over Anakin</Typography>
				</Toolbar>
			</AppBar>
    )
}