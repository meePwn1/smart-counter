import { ChangeEvent, FC } from 'react'
import Input from '../../ui/input/Input'
import style from './Label.module.scss'

interface LabelProps {
	htmlFor: string
	title: string
	value: number
	hasError: boolean
	setValue: (e: ChangeEvent<HTMLInputElement>) => void
}

const Label: FC<LabelProps> = props => {
	return (
		<label htmlFor={props.htmlFor} className={style.label}>
			<span className={style.text}>{props.title}</span>
			<Input id={props.htmlFor} value={props.value} onChange={props.setValue} hasError={props.hasError} />
		</label>
	)
}

export default Label
