import styled, { keyframes } from 'styled-components'

export const Heading = styled.h2`
	position: relative;
	height: 38px;
	overflow: hidden;
	color: #2ac7bd;
	font-family: Blanka;
	font-size: 32px;
	white-space: nowrap;
	text-transform: uppercase;
`

export const Text = styled.span`
	display: inline-block;
	position: absolute;
	left: ${(props) => props.left + 'px'};
	transition: left 1s linear;
`
