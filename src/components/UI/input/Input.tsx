import { ComponentProps, FC } from 'react'
import style from './Input.module.scss'

// Matt Pockokk
type IInput = {
	hasError?: boolean
} & ComponentProps<'input'>

const Input: FC<IInput> = ({ hasError, ...props }) => {
	const inputClassNames = [style.input]

	if (hasError) {
		inputClassNames.push(style.error)
	}
	return <input {...props} className={inputClassNames.join(' ')} />
}

export default Input
