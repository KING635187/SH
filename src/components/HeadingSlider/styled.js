import styled, { keyframes } from 'styled-components'

const moveLeft = keyframes`
    from {
      top: 0;
      left: 0;
    }
    to {
      top: 0;
      left: 120%;
    }
`

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
	position: absolute;
	left: 0;
	transform: translateX(-100%);
	animation: ${moveLeft} 8s linear ${(props) => props.delay}s infinite both;

	&:not(:last-child) {
		margin-right: 1200px;
	}
`