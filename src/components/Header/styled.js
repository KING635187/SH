import styled, { css, keyframes } from 'styled-components'

const heading = css`
	font-family: Blanka;
	font-size: 72px;
	color: #00FFF5;

	@media (max-width: 1360px) {
		font-size: 64px;
	}

	@media (max-width: 425px) {
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
	animation-delay: ${(props) => props.delay}s;
	animation-fill-mode: both;
`

export const StyledComponent = styled.div`
	padding-top: 200px;
	text-align: left;
	padding-bottom: 200px;

	@media (max-width: 1360px) {
		padding-top: 160px;
	}

	@media (max-width: 425px) {
		padding-top: 250px;
		padding-bottom: 300px;
	}
`
