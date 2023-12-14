import { FC } from 'react'
import style from './Table.module.scss'

interface TableProps {
	count: number | string
	error: boolean
	maxValue: number
}

const Table: FC<TableProps> = ({ count, maxValue, error }) => {
	const classNames = [style.table]

	if (count === maxValue || error) {
		classNames.push(style.max)
	}
	return <div className={classNames.join(' ')}>{error ? 'Incorrect value' : count}</div>
}

export default Table
