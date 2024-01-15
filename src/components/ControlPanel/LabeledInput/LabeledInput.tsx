import { ChangeEvent, FC } from 'react'
import Input from '../../UI/input/Input'
import styles from './LabeledInput.module.scss'

interface LabeledInputProps {
	title: string
	value: number
	error: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const LabeledInput: FC<LabeledInputProps> = ({
	title,
	value,
	error,
	onChange,
}) => {
	return (
		<label className={styles.label}>
			<span className={styles.span}>{title}</span>
			<Input type='number' value={value} onChange={onChange} hasError={error} />
		</label>
	)
}

export default LabeledInput
