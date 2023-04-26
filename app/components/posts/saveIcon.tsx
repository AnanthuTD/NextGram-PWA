interface saveProps {
	stroke: string;
	fill: string;
    className:string;
}

function saveIcon({ stroke, fill, className}: saveProps) {
	return (
		<>
			<svg
				aria-label="Save"
			
				color="rgb(168, 168, 168)"
				fill="rgb(168, 168, 168)"
				height="24"
				role="img"
				viewBox="0 0 24 24"
				width="24"
               className={className}
			>
				<title>Save</title>
				<polygon
					fill={fill}
					points="20 21 12 13.44 4 21 4 3 20 3 20 21"
					stroke={stroke}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				></polygon>
			</svg>
		</>
	);
}
saveIcon.defaultProps = {
	stroke: "currentColor",
	fill: "none",
    className:""
};
export default saveIcon;
