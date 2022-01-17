import React from "react";

const HomeHero = () => {
	return (
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
	);
};

export default HomeHero;
