import React from "react";

const Welcome = () => {
	return (
		<div className="wrapper w-100 vh-100">
			<div className="container-sm h-100 p-4 d-flex flex-column justify-content-between align-items-center ">
				<div id="hero" className="container-sm">
					<img
						className="d-block mx-auto mb-3"
						src="https://res.cloudinary.com/dckunlwcb/image/upload/v1642290338/Bootstrap/logo_bfp8aq.png"
						alt="Company-Logo"
						width="165"
						heigh="60"
					/>
					<img
						className="d-block mx-auto"
						src="https://res.cloudinary.com/dckunlwcb/image/upload/v1642290338/Bootstrap/intro-pic_niabsu.svg"
						alt="Initial-image"
						width="280"
						heigh="280"
					/>
					<p className=" main-text text-center text-dark">
						Somos una <strong>billetera online</strong> que te permitirá{" "}
						<strong>ahorrar tiempo y dinero</strong>.
					</p>
				</div>

				<div id="buttons-container" className="d-flex flex-column">
					<a href="#" class="btn btn-dark mb-4" role="button" aria-pressed="true">
						{" "}
						<strong>Crear Cuenta</strong>{" "}
					</a>
					<a
						href="#"
						class="btn btn-light btn-outline-dark"
						role="button"
						aria-pressed="true"
					>
						<strong>Ya tengo cuenta</strong>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
