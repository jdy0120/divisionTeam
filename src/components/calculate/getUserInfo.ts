import React from 'react'
import { API_URL,API_KEY } from '../../assets/config'

export const getUserAccountId = async (userId:string) => {
    const response = await fetch(`/lol/summoner/v4/summoners/by-name/${userId}?api_key=${API_KEY}`,)
    console.log(response)
}

const getUserInfo = async () => {
    const response = await fetch(``,)
}