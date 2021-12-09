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
		transform: translateY(0%);
	}
`

export const StyledHeading = styled.div`
	overflow: hidden;
`

export const StyledText = styled.span`
	display: inline-block;
	${heading}
	animation-name: ${slideToTop};
	animation-duration: 1s;
	animation-delay: 1s;
`

export const StyledHeading2 = styled.h1`
	${heading}
	animation-name: ${slideToTop};
	animation-duration: 1s;
	animation-delay: 1.7s;

	@keyframes example2 {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`

export const StyledHeading3 = styled.h1`
	${heading}
	animation-name: ${slideToTop};
	animation-duration: 1s;
	animation-delay: 2.4s;

	@keyframes example3 {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`

export const StyledHeading4 = styled.h1`
	${heading}
	animation-name: ${slideToTop};
	animation-duration: 1s;
	animation-delay: 3.1s;

	@keyframes example4 {
	}

	@media (max-width: 1360px) {
		font-size: 48px;
	}
`

export const StyledComponent = styled.div`
	padding-top: 250px;
	text-align: left;
	padding-bottom: 220px;

	@media (max-width: 1360px) {
		padding-top: 160px;
	}
`
