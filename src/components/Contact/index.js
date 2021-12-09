import Container from '../Container'
import {
	Styledgmail,
	Styledcontent,
	Styledlink,
	Styledlink2,
	Styledlink3,
	StyledLinkContainer,
} from './styled'
import { MouseContext } from '../../context/mouse-context'
import { useContext } from 'react'
import Slidercopy2 from '../Slidercopy2'

const Contact = () => {
	const { cursorChangeHandler } = useContext(MouseContext)

	return (
		<Container>
			<Slidercopy2 />
			<Styledcontent>
				<Styledgmail
					onMouseEnter={() => cursorChangeHandler('hovered')}
					onMouseLeave={() => cursorChangeHandler('')}
					href="mailto:shaxbozibragimbekov@gmail.com"
					target="_blank"
				>
					shaxbozibragimbekov@gmail.com
				</Styledgmail>
			</Styledcontent>
			<StyledLinkContainer>
				<Styledlink
					onMouseEnter={() => cursorChangeHandler('hovered')}
					onMouseLeave={() => cursorChangeHandler('')}
					href="https://t.me/Frontend_Developer_SH"
					target="_blank"
				>
					telegram
				</Styledlink>
				<Styledlink2
					onMouseEnter={() => cursorChangeHandler('hovered')}
					onMouseLeave={() => cursorChangeHandler('')}
					href="#"
					target="_blank"
				>
					facebook
				</Styledlink2>
			</StyledLinkContainer>
			<StyledLinkContainer>
				<Styledlink
					onMouseEnter={() => cursorChangeHandler('hovered')}
					onMouseLeave={() => cursorChangeHandler('')}
					href="#"
					target="_blank"
				>
					instagram
				</Styledlink>
				<Styledlink3
					onMouseEnter={() => cursorChangeHandler('hovered')}
					onMouseLeave={() => cursorChangeHandler('')}
					href="https://github.com/KING635187"
					target="_blank"
				>
					github
				</Styledlink3>
			</StyledLinkContainer>
		</Container>
	)
}

export default Contact
