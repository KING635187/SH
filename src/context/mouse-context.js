import { createContext, useState } from 'react'

export const MouseContext = createContext({
	cursorType: '',
	cursorChangeHandler: () => {},
})

const MouseContextProvider = ({ children }) => {
	const [cursorType, setCurstorType] = useState('')

	const cursorChangeHandler = (cursorType) => {
		setCurstorType(cursorType)
	}

	return (
		<MouseContext.Provider
			value={{
				cursorType: cursorType,
				cursorChangeHandler: cursorChangeHandler,
			}}
		>
			{children}
		</MouseContext.Provider>
	)
}

export default MouseContextProvider
