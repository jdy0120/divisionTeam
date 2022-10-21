import axios from "axios";
import { serverUrl } from "../assets/config";

export const getUserAccountId = async (userId: string): Promise<any> => {
    try {
        // const response = await axios.get(`http://localhost:5000/seismic-sweep-318403/us-central1/getUserInfo/fetchUserAccountId?userId=${userId}`);
        const response = await axios.get(
            `${serverUrl}/getUserInfo/fetchUserAccountId?userId=${userId}`
        );
        return response.data.userAccountId;
    } catch (err) {
        throw new Error(err.response.data);
    }
};

export const getUserInfo = async (id: string): Promise<any> => {
    try {
        // const response = await axios.get(`http://localhost:5000/seismic-sweep-318403/us-central1/getUserInfo/fetchUserInfo?id=${id}`,)
        const response = await axios.get(
            `${serverUrl}/getUserInfo/fetchUserInfo?id=${id}`
        );
        return response.data.userInfo;
    } catch (err) {
        throw new Error(err.response.data);
    }
};
