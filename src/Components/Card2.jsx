import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

export default function BasicCard2() {
	return (
		<Card sx={{ width: "100%" }}>
			<CardContent sx={{ width: "85%", margin: " 0 auto" }}>
				<h3>Summary</h3>
				<div className="reaction score-card">
					<div className="group-1">
						<img src="./src/images/icon-reaction.svg" alt="" />
						<h4>Reaction</h4>
					</div>
					<p className="score">80 / 100</p>
				</div>
				<div className="memory score-card">
					<div className="group-1">
						<img src="./src/images/icon-memory.svg" alt="" />
						<h4>Memory</h4>
					</div>
					<p className="score">92 / 100</p>
				</div>
				<div className="verbal score-card">
					<div className="group-1">
						<img src="./src/images/icon-verbal.svg" alt="" />
						<h4>Verbal</h4>
					</div>
					<p className="score">61 / 100</p>
				</div>
				<div className="visual score-card">
					<div className="group-1">
						<img src="./src/images/icon-visual.svg" alt="" />
						<h4>Visual</h4>
					</div>
					<p className="score">72 / 100</p>
				</div>
			</CardContent>

			<Button
				variant="contained"
				sx={{
					backgroundColor: "var(--clr-Dark-gray-blue)",
					color: "var(--clr-White)",
					borderRadius: "50px",
					padding: "10px 15px",
					textTransform: "none",
					margin: "0 auto 5.5rem",
					position: "static",
					textAlign: "center",
					display: "block",
					width: "80%",
					fontFamily: "inherit",
					fontWeight: "700",
					fontSize: "inherit",
				}}
			>
				Continue
			</Button>
		</Card>
	);
}
