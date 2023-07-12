import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const baseURL = 'http://192.168.1.34:4000/api';


const vapApi = axios.create({baseURL});

vapApi.interceptors.request.use(
    async(config:any)=>{
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.token= token;
        }
        return config
    }
);

export default vapApi;