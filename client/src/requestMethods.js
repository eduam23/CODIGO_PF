import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmY3ZGE3MjNiN2NjMjZhOWNmMWJlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDEyMzE3NSwiZXhwIjoxNjQwMzgyMzc1fQ.BR70-S0gcJO6DyLnOLMixnSSgnuZ9YX_0DnRD7nHvuQ"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
})