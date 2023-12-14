import { ButtonHTMLAttributes, FC } from 'react'
import style from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButton> = ({ children, ...props }) => {
	return (
		<button {...props} className={style.button}>
			{children}
		</button>
	)
}

export default Button
