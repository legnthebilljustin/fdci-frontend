import { STORAGE_KEYS } from "@/constants/keys";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api"
const authToken = localStorage.getItem(STORAGE_KEYS.TOKEN)

export const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})