import { useRef, useEffect, useState } from 'react'
import useWindowDimentions from '../../hooks/useWindowDimentions'
import { Heading, Text } from './styled'

const HeadingSlider = ({ text, gap = 80 }) => {
	const textElement = useRef()
	const windowWidth = useWindowDimentions().width
	const [elements, setElements] = useState([])
	const [textElementWidth, setTextElementWidth] = useState(0)
	const [count, setCount] = useState(1)
	const change = 80

	useEffect(() => {
		setTextElementWidth(textElement.current.offsetWidth)
		setCount(Math.floor(windowWidth / (textElementWidth + gap) + 2))

		let elementArr = []
		let i = 0
		while (i < count) {
			elementArr.push({
				text,
				left: (textElementWidth + gap) * i,
			})
			i++
		}

		setElements(elementArr)

		const timer = setInterval(handleSlide, 1000)

		return () => clearInterval(timer)
	}, [windowWidth, textElement, textElementWidth])

	const handleSlide = () => {
		setElements(
			elements.map((element) => ({
				...element,
				left: element.left + change,
			}))
		)
	}

	return (
		<Heading>
			<Text ref={textElement} style={{ visibility: 'hidden' }}>
				{text}
			</Text>
			{elements &&
				elements.map((element, index) => (
					<Text key={index.toString()} left={element.left}>
						{element.text}
					</Text>
				))}
		</Heading>
	)
}

export default HeadingSlider
