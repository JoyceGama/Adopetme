import styled from "styled-components";

export const Head = styled.header`
	background: #f2f2f2;
	box-shadow: -3px 7px 9px 2px rgb(0 0 0 / 25%);

	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;

	.menuMobile-button {
		position: fixed;
		z-index: 9999;
		top: 4px;
		left: 0;

		cursor: pointer;
		width: fit-content;

		border: 0 none;
		background: none;

		@media (min-width: 450px) {
			top: 10%;
		}
	}

	.imgLogo {
		width: 100%;
		max-width: 398px;
		height: auto;
		min-height: 99px;
	}

	.pawsLogo,
	.logo-circle {
		display: none;
	}

	@media (min-width: 1024px) {
		background-color: #f2ae2f;
		box-shadow: -3px 7px 9px 2px rgb(0 0 0 / 25%);

		padding: 1em;
		top: 0;

		position: fixed;
		z-index: 9999;

		.imgLogo,
		.menuMobile-button {
			display: none;
		}

		.logo-nav {
			width: 130px;
			height: 130px;
			padding: 1%;
			position: relative;
		}

		.logo-circle {
			margin: 0 auto;
			width: 100%;
			height: 100%;

			border-radius: 50px;

			background-color: #e9a82f;
			box-shadow: -3px 7px 9px 2px rgba(0, 0, 0, 0.25);

			display: block;
		}

		.pawsLogo {
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			position: absolute;

			display: block;
		}
	}
`;
