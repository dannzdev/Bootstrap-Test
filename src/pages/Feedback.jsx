import React from "react";
import Hero from "@components/FeedbackHero";
import TopIcon from "@components/TopIcons";
import Wrapper from "@components/Wrapper";

const Feedback = () => {
	return (
		<Wrapper>
			<div className="container-sm h-100 p-4 d-flex flex-column align-items-center ">
				<div className="form-container">
					<TopIcon path={`/identity`} size={100} />
					<Hero />
				</div>
			</div>
		</Wrapper>
	);
};

export default Feedback;
