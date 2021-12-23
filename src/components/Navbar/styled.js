import styled from 'styled-components'

export const StyledComponent = styled.div`
	width: 100%;
	position: fixed;
	z-index: 2;
`

export const StyledLogo = styled.h2`
	font-family: Blanka;
	font-size: 36px;
	line-height: 43px;
	color: #00FFF5;
	padding-top: 12px;
	display: inline-block;
	position: absolute;
	right: 0;
	margin-right: 20px;

	@media (max-width: 1360px) {
		font-size: 28px;
		padding-top: 6px;
	}

	@media (max-width: 425px) {
		font-size: 28px;
		padding-top: 6px;
	}
`

export const StyledMusic = styled.button`
	font-family: Blanka;
	color: #00FFF5;
	margin-right: 164px;
	position: absolute;
	right: 0;
	margin-top: 30px;
	border: none;
	background-color: transparent;

	@media (max-width: 1360px) {
		font-size: 10px;
		margin-top: 20px;
	}

	@media (max-width: 425px) {
		margin-left: 12px;
		left: 0;
		font-size: 14px;
	}
`
