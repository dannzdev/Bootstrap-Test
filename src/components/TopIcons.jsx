import React from "react";
import { Link } from "react-router-dom";

const TopIcons = ({ size, path }) => {
	return (
		<div
			id="top-section"
			className="container-sm d-flex align-items-center justify-content-between"
		>
			<div id="arrow-left" className="d-flex align-items-center w-25">
				<Link to={path}>
					<img
						className="p-2"
						src="https://res.cloudinary.com/dckunlwcb/image/upload/v1642290338/Bootstrap/Arrow_wktwse.svg"
						alt="arrow-image"
					/>
				</Link>
				<p className="mb-0 text-muted">Atras</p>
			</div>
			<div id="container-bar" className="progress bg-gray">
				<div
					className={`
          progress-bar w-${size} color
          `}
					role="progressbar"
					aria-valuenow="100"
					aria-valuemin="0"
					aria-valuemax="100"
				></div>
			</div>
		</div>
	);
};

export default TopIcons;
