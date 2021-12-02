import styled from 'styled-components'

export const StyledHeading = styled.div`
	font-family: Blanka;
	font-size: 64px;
	color: #2ac7bd;
	padding-top: 100px;
	position: relative;
	animation-name: example;
	animation-duration: 10s;
	animation-delay: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate;

	@keyframes example {
		0% {
			color: #2ac7bd;
		}
		20% {
			color: #004440;
		}
		40% {
			color: #2ac7bd;
		}
		60% {
			color: #004440;
		}
		80% {
			color: #2ac7bd;
		}
		100% {
			color: #004440;
		}
	}

	@media (max-width: 1360px) {
		font-size: 48px;
		padding-top: 100px;
	}
`

export const StyledHeading2 = styled.h1`
	font-family: Blanka;
	font-size: 64px;
	color: #2ac7bd;
	padding: 0;
	position: relative;
	animation-name: example2;

	@keyframes example2 {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`

export const StyledHeading3 = styled.h1`
	font-family: Blanka;
	font-size: 64px;
	color: #2ac7bd;
	padding: 0;
	position: relative;
	animation-name: example3;

	@keyframes example3 {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`

export const StyledHeading4 = styled.h1`
	font-family: Blanka;
	font-size: 64px;
	color: #2ac7bd;
	padding: 0;
	position: relative;
	animation-name: example4;

	@keyframes example4 {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`

export const StyledHeading5 = styled.h1`
	font-family: Blanka;
	font-size: 64px;
	color: #2ac7bd;
	position: relative;
	animation-name: example;

	@keyframes example {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`

export const StyledHeading6 = styled.h1`
	font-family: Blanka;
	font-size: 64px;
	color: #2ac7bd;
	padding: 0;
	position: relative;
	animation-name: example6;

	@keyframes example6 {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`
