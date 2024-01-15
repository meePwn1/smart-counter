import cn from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'
import style from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	rounded?: boolean
	actionType?: 'inc' | 'dec'
}

const Button: FC<IButton> = ({ children, rounded, actionType, ...props }) => {
	const buttonStyles = cn(style.button, {
		[style.rounded]: rounded,
		[style.plus]: actionType === 'inc',
		[style.minus]: actionType === 'dec',
	})

	return (
		<button {...props} className={buttonStyles}>
			{children}
		</button>
	)
}

export default Button
