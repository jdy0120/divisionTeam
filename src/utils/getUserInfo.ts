import { API_KEY } from '../assets/config'

export const getUserAccountId = async (userId:string): Promise<any>=> {
    const response = await fetch(`/lol/summoner/v4/summoners/by-name/${userId}?api_key=${API_KEY}`)
    return response.json()
}

export const getUserInfo = async (id:string): Promise<any> => {
    const response = await fetch(`/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`,)
    return response.json()
}