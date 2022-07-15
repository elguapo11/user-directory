import React from 'react'
import Header from './Header'
import UserCard from './UserCard'
import data from '../data'

const Main = () => {
    console.log({data})
    return (
        <>
            <Header/>
            <UserCard data={data}/>
        </>
    )
}

export default Main