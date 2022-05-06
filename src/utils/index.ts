/* eslint-disable react-hooks/exhaustive-deps */
import { delay } from 'lodash'
import { useEffect, useState } from 'react'

export const isFalsy = (value: unknown) => (value === 0 ? false : !value)

// 删除对象的空建
export const cleanObject = (object: object) => {
    const result = { ...object }
    Object.keys(result).forEach((key) => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}

// export const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(() => {
//       func(...param);
//     }, delay);
//   };
// };

export const useDebounce = <V>(value: V, delay?: number): any => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timeout)
        }
    }, [value, delay])

    return debouncedValue
}
