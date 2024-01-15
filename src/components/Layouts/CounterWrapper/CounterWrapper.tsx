import { FC, ReactNode } from 'react'
import styles from './CounterWrapper.module.scss'
interface CounterWrapperProps {
	children?: ReactNode
}

const CounterWrapper: FC<CounterWrapperProps> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>
}

export default CounterWrapper
