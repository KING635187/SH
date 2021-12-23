import styled, { keyframes } from 'styled-components'

const moveRight = keyframes`
    from {
      top: 0;
      left: 100%;
    }
    to {
      top: 0;
      left: 0;
    }
`

export const Wrapper1 = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	z-index: -1;
	background-color: transparent;
`

export const Center2 = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 48%;
	left: 50%;

	@media (max-width: 1360px) {
		top: 43%;
	}

	@media (max-width: 425px) {
		top: 64%;
  }
`

export const Path4 = styled.div`
	width: 120%;
	position: absolute;
	transform: translateX(calc(-50% + ${(props) => props.toRight + 'px'}))
		translateY(-50%) rotateZ(${(props) => props.rotateZ || '0'});
`

export const Line3 = styled.span`
	color: #00FFF5;
	font-family: Blanka;
	font-size: 32px;
	width: 156px;
	height: 3px;
	position: absolute;
	top: 0;
	left: 0;
	animation: ${moveRight} 8s linear ${(props) => props.delay + 's' || '0s'}
		infinite both;

	@media (max-width: 1360px) {
		font-size: 26px;
	}
`
