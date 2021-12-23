import styled, { keyframes } from 'styled-components'

const moveLeft = keyframes`
    from {
      top: 0;
      left: 0;
    }
    to {
      top: 0;
      left: 100%;
    }
`

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	z-index: -1;
	background-color: #222831;
`

export const Center = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 12%;
	left: 50%;

	/* @media (max-width: 425px) {
		left: 10%;

	} */
`

export const Path = styled.div`
	width: 400%;
	height: 3px;
	background-color: #393E46;
	position: absolute;
	transform: translateX(calc(-50% + ${(props) => props.toRight + 'px'}))
		translateY(-50%) rotateZ(${(props) => props.rotateZ || '0'});
`

export const Line = styled.span`
	width: 60px;
	height: 3px;
	background-color: #00ADB5;
	position: absolute;
	top: 0;
	left: 0;
	animation: ${moveLeft} 15s linear ${(props) => props.delay + 's' || '0s'}
		infinite both;
`
