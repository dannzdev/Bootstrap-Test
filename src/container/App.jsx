import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feedback from "@pages/Feedback";
import Identity from "@pages/Identity";
import Welcome from "@pages/Welcome";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Welcome />} />
				<Route exact path="/identity" element={<Identity />} />
				<Route exact path="/feedback" element={<Feedback />} />
				{/* <Route path="*" element={NotFound} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
