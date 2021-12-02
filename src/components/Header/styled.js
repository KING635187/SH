import styled, { css, keyframes } from 'styled-components'

const heading = css`
	font-family: Blanka;
	font-size: 64px;
	color: #2ac7bd;

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`

const slideToTop = keyframes`
 	from {
		transform: translateY(100%);
	}
	to {
		transform: translateY(0);
	}
`

export const StyledHeading = styled.div`
	display: inline-block;
	overflow: hidden;
`

export const StyledText = styled.span`
	display: inline-block;
	${heading}
	animation-name: ${slideToTop};
	animation-duration: 1s;
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
	${heading}
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
	${heading}
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
	${heading}
	position: relative;
	animation-name: example;

	@keyframes example {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`

export const StyledHeading6 = styled.h1`
	${heading}
	padding: 0;
	position: relative;
	animation-name: example6;

	@keyframes example6 {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`
