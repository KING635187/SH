import { useState, useContext } from 'react'
import { StyledComponent, StyledLogo, StyledMusic } from './styled'
import { MouseContext } from '../../context/mouse-context'

const Navbar = () => {
	const [playing, setPlaying] = useState(false)
	const [audio, setAudio] = useState(new Audio('/audio/sweet.mp3'))

	const { cursorChangeHandler } = useContext(MouseContext)

	audio.volume = 0.1

	const handleMusicToogle = () => {
		if (!playing) {
			audio.play()
			setPlaying(true)
		} else {
			audio.pause()
			setPlaying(false)
		}
	}

	return (
		<StyledComponent>
			<StyledMusic
				onClick={handleMusicToogle}
				onMouseEnter={() => cursorChangeHandler('hovered')}
				onMouseLeave={() => cursorChangeHandler('')}
			>
				{playing ? 'music-pause' : 'music-start'}
			</StyledMusic>
			<StyledLogo>SH</StyledLogo>
		</StyledComponent>
	)
}

export default Navbar
