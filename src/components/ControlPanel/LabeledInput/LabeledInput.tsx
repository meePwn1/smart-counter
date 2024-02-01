import { ChangeEvent, FC, KeyboardEvent } from 'react'
import Input from '../../UI/input/Input'
import styles from './LabeledInput.module.scss'

interface LabeledInputProps {
	title: string
	value: string
	error: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
}

const LabeledInput: FC<LabeledInputProps> = ({
	title,
	value,
	error,
	onChange,
	onKeyDown,
}) => {
	return (
		<label className={styles.label}>
			<span className={styles.span}>{title}</span>
			<Input
				type='text'
				value={value}
				onChange={onChange}
				hasError={error}
				onKeyDown={onKeyDown}
				inputMode='numeric'
			/>
		</label>
	)
}

export default LabeledInput
