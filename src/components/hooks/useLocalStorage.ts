import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type ReturnValueType<T> = [T, Dispatch<SetStateAction<T>>]

export const useLocalStorage = <T>(key: string, initValue: T): ReturnValueType<T> => {
	const [value, setValue] = useState<T>(() => {
		const storedValue = localStorage.getItem(key)
		return storedValue ? JSON.parse(storedValue) : initValue
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value, key])

	return [value, setValue]
}
