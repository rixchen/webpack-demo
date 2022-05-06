import React, { useEffect, useState } from 'react'
import { cleanObject, useDebounce, useMount } from '@/utils'
import qs from 'qs'
import { HOST_URL } from '@/const'
import { List } from '@/ProjectList/listswap'
import { SearchPanel } from './searchPanel'
export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: '',
    })

    const deBouncedPraam = useDebounce(param, 500)
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${HOST_URL}/projects?${qs.stringify(cleanObject(deBouncedPraam))}`).then(async (response) => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [deBouncedPraam])

    useMount(() => {
        fetch(`${HOST_URL}/users`).then(async (respones) => {
            if (respones.ok) {
                setUsers(await respones.json())
            }
        })
    })

    return (
        <div>
            <SearchPanel param={param} setParam={setParam} users={users} />
            <List users={users} list={list} />
        </div>
    )
}
