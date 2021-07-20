import axios from 'axios'
import { serverUrl } from '../assets/config'

export const getUserAccountId = async (userId:string): Promise<any>=> {
    const response = await axios.get(`http://localhost:5000/seismic-sweep-318403/us-central1/getUserInfo/fetchUserAccountId?userId=${userId}`)
    // const response = await axios.get(`${serverUrl}/getUserInfo/fetchUserAccountId?userId=${userId}`)
    console.log(response.data)
    if (response) {
        return response.data.userAccountId
    } else {
        throw new Error('Not Exist UserID')
    }
}

export const getUserInfo = async (id:string): Promise<any> => {
    const response = await axios.get(`http://localhost:5000/seismic-sweep-318403/us-central1/getUserInfo/fetchUserInfo?id=${id}`,)
    // const response = await axios.get(`${serverUrl}/getUserInfo/fetchUserInfo?id=${id}`,)
    if (response) {
        return response.data.userInfo
    } else {
        throw new Error('Not Exist UserInfo')
    }
}