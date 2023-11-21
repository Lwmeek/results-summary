import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function BasicCard() {
	return (
		<Card
			sx={{
				textAlign: "center",
				background:
					"linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
				borderRadius: "0 0 35px 35px",
				color: "var(--clr-Light-lavender)",
				paddingBottom: "1rem",
			}}
		>
			<CardContent>
				<h2>Your Result</h2>
				<div className="total-score">
					<span className="seventy-six">76</span> <p>of 100</p>
				</div>
				<div className="outcome">
					<span>Great</span>
					<p>
						You scored higher than 65% of the people who have taken these tests.
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
