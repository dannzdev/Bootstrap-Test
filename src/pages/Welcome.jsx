import React from "react";
import Hero from "@components/HomeHero";
import Wrapper from "@components/Wrapper";
import { Link } from "react-router-dom";

const Welcome = () => {
	return (
		<Wrapper>
			<div className="container-sm h-100 p-4 d-flex flex-column justify-content-between align-items-center ">
				<Hero />

				<div id="buttons-container" className="d-flex flex-column">
					<Link
						to="/identity"
						className="btn btn-dark mb-4"
						role="button"
						aria-pressed="true"
					>
						{" "}
						<strong>Crear Cuenta</strong>{" "}
					</Link>
					<Link
						to="#"
						className="btn btn-light btn-outline-dark"
						role="button"
						aria-pressed="true"
					>
						<strong>Ya tengo cuenta</strong>
					</Link>
				</div>
			</div>
		</Wrapper>
	);
};

export default Welcome;
