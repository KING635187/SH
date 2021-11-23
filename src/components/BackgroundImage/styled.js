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

export const Path = styled.div`
	width: 1717px;
	height: 3px;
	background-color: #004440;
	position: relative;
	transform: rotateZ(${(props) => props.rotateZ || '0'})
		translate(${(props) => props.translate});
`

export const Line = styled.span`
	width: 80px;
	height: 3px;
	background-color: #2ac7bd;
	position: absolute;
	top: 0;
	left: 0;
	animation: ${moveLeft} 5s linear infinite both;
`
